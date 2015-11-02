package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.UnorderedSet;
import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;

import we.are.bubblesort.MovieApp.shared.OrderedSet;
import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.Movie;

/**
 * The client-side stub for the RPC service.
 */
@RemoteServiceRelativePath("query")
public interface QueryService extends RemoteService {
	public Collection<Movie> getMovieCollection(UnorderedSet<MovieAttribute> filterSet);
	public Collection<Movie> getMovieCollection(UnorderedSet<MovieAttribute> filterSet, 	int limit, int offset);
	
	public Collection<Movie> getMovieCollection(MovieAttribute filter);
	public Collection<Movie> getMovieCollection(MovieAttribute filter, 			int limit, int offset);
	
	public OrderedSet<MovieAttribute> getFilterSet(MovieAttribute attribute);
	public OrderedSet<MovieAttribute> getFilterSet(MovieAttribute attribute, int limit, int offset);
}