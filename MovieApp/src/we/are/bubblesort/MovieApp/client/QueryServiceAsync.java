package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.rpc.AsyncCallback;

import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.Movie;
import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.OrderedSet;
import we.are.bubblesort.MovieApp.shared.UnorderedSet;
import we.are.bubblesort.MovieApp.shared.WorldStatisticsModel;

/**
 * The async counterpart of <code>QueryService</code>.
 */
public interface QueryServiceAsync {
	/*
	 * (non-Javadoc)
	 * @see we.are.bubblesort.MovieApp.client.QueryService#getMovieCollection(we.are.bubblesort.MovieApp.shared.Set, int, int)
	 * @param filterSet the set of filters sent for querying
	 * @param limit
	 * @param offset
	 * @param AsyncCallback<Collection<Movie>> collection of the queried movies
	 */
	public void getMovieCollection(UnorderedSet<MovieAttribute> filterSet, 	int limit, int offset, 	AsyncCallback<Collection<Movie>> callback);

	/*
	 * (non-Javadoc)
	 * @see we.are.bubblesort.MovieApp.client.QueryService#getFilterSet(we.are.bubblesort.MovieApp.shared.MovieAttribute, int, int)
	 * @param attribute
	 * @param limit
	 * @param offset
	 * @param AsyncCallback<OrderedSet<MovieAttribute>> OrderedSet of attributes
	 */
	public void getAttributeSet(MovieAttribute attribute, int limit, int offset, 	AsyncCallback<OrderedSet<MovieAttribute>> callback);
	
	public void getWorldStatisticsModel(UnorderedSet<MovieAttribute> filterSet, AsyncCallback<WorldStatisticsModel> callback);
}