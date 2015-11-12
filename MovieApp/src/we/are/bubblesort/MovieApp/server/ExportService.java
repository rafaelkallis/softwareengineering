package we.are.bubblesort.MovieApp.server;

import java.io.IOException;
import java.io.OutputStream;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.ExportServiceHelper;
import we.are.bubblesort.MovieApp.shared.Movie;
import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.UnorderedSet;

@SuppressWarnings("serial")
public class ExportService extends HttpServlet {
	
	@Override
	public void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException, IOException{
		try {
			String queryString = request.getQueryString();
			if(queryString == null){
				response.sendError(400, "Empty Query");
				return;
			}		
			UnorderedSet<MovieAttribute> filterSet = ExportServiceHelper.queryStringToFilterSet(queryString);
			if(filterSet == null){
				response.sendError(400, "Invalid Syntax" );
				return;
			}
			
			System.out.println(filterSet.toJoinedString(", "));
			Collection<Movie> movies = QueryServiceImpl.getMovieCollectionSync(filterSet, 0, 0);
			if(movies == null){
				response.sendError(400, "No Movies found" );
				return;
			}
			
			response.setContentType("text/csv");
			response.setHeader("Content-Disposition", "attachment; filename=\"MovieExport.csv\"");
			OutputStream o = response.getOutputStream();
			o.write(("id,Title,Year,Duration,Languages,Countries,Genres\n"+ExportServiceHelper.toSV(movies, ",")).getBytes());
			o.flush();
		} catch (Exception e) {
			e.printStackTrace();
			response.sendError(400, e.getMessage());
		}
		
	}
}
