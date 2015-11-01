package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.rpc.AsyncCallback;

import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.Movie;
import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.Set;

/**
 * The async counterpart of <code>QueryService</code>.
 */
public interface QueryServiceAsync {
	public void getMovieCollection(Set<MovieAttribute> filterSet, 							AsyncCallback<Collection<Movie>> callback);
	public void getMovieCollection(Set<MovieAttribute> filterSet, 	int limit, int offset, 	AsyncCallback<Collection<Movie>> callback);

	public void getMovieCollection(String search_string, 									AsyncCallback<Collection<Movie>> callback);
	public void getMovieCollection(String search_string,			int limit, int offset,	AsyncCallback<Collection<Movie>> callback);

	public void getMovieCollection(MovieAttribute attribute, 								AsyncCallback<Collection<Movie>> callback);
	public void getMovieCollection(MovieAttribute attribute, 		int limit, int offset,	AsyncCallback<Collection<Movie>> callback);
}