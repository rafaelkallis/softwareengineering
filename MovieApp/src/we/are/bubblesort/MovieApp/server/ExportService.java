package we.are.bubblesort.MovieApp.server;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import we.are.bubblesort.MovieApp.client.QueryServiceAsync;
import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.ExportHelper;
import we.are.bubblesort.MovieApp.shared.Movie;
import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.UnorderedSet;

@SuppressWarnings("serial")
public class ExportService extends HttpServlet {
	
	//TODO initialise
	QueryServiceImpl queryService;
	
	@Override
	public void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException, IOException{
			
		UnorderedSet<MovieAttribute> filterSet = ExportHelper.urlToFilterSet(request);
		
		Collection<Movie> movies = queryService.getMovieCollection(filterSet, 0, 0);
		
		//DO something with movies
	}
}
