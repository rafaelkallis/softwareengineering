package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.rpc.AsyncCallback;

import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.Movie;
import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.OrderedSet;
import we.are.bubblesort.MovieApp.shared.UnorderedSet;

/**
 * The async counterpart of <code>QueryService</code>.
 */
public interface QueryServiceAsync {
	public void getMovieCollection(UnorderedSet<MovieAttribute> filterSet, 							AsyncCallback<Collection<Movie>> callback);
	public void getMovieCollection(UnorderedSet<MovieAttribute> filterSet, 	int limit, int offset, 	AsyncCallback<Collection<Movie>> callback);

	public void getFilterSet(String attributeDbLabelName, int limit, int offset, 	AsyncCallback<OrderedSet<MovieAttribute>> callback);
	public void getFilterSet(String attributeDbLabelName, 							AsyncCallback<OrderedSet<MovieAttribute>> callback);
}