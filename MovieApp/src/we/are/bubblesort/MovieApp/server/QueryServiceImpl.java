package we.are.bubblesort.MovieApp.server;

import we.are.bubblesort.MovieApp.client.QueryService;
import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.Movie;
import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.Set;

import java.sql.SQLException;

import com.google.gwt.user.server.rpc.RemoteServiceServlet;

/**
 * The server-side implementation of the RPC service.
 */
@SuppressWarnings("serial")
public class QueryServiceImpl extends RemoteServiceServlet implements QueryService {
	Database database;
	
	@Override
	public Collection<Movie> getMovieCollection(Set<MovieAttribute> filterSet) {
		Collection<Movie> results = null;
		try{
			results = database.query(filterSet);
		}catch (SQLException e){
			e.printStackTrace();
		}
		return results;
	}
}