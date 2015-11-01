package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.Set;
import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;
import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.Movie;

/**
 * The client-side stub for the RPC service.
 */
@RemoteServiceRelativePath("query")
public interface QueryService extends RemoteService {
	public Collection<Movie> getMovieCollection(Set<MovieAttribute> filterSet);
	public Collection<Movie> getMovieCollection(Set<MovieAttribute> filterSet, int limit, int offset);
	
	public Collection<Movie> getMovieCollection(String search_string);
	public Collection<Movie> getMovieCollection(String search_string, int limit, int offset);
	
	public Collection<Movie> getMovieCollection(MovieAttribute attribute);
	public Collection<Movie> getMovieCollection(MovieAttribute attribute, int limit, int offset);
	

	
}