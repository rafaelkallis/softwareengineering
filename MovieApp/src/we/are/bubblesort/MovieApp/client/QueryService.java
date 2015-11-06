package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.UnorderedSet;
import we.are.bubblesort.MovieApp.shared.WorldStatisticsModel;
import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;
import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.Movie;

/**
 * The client-side stub for the RPC service.
 */
@RemoteServiceRelativePath("query")
public interface QueryService extends RemoteService {
	
	/*
	 * (non-Javadoc)
	 * @see we.are.bubblesort.MovieApp.client.QueryService#getMovieCollection(we.are.bubblesort.MovieApp.shared.Set, int, int)
	 * @param filterSet the set of filters sent for querying
	 * @param limit
	 * @param offset
	 * @returns Collection<Movie> collection of the queried movies
	 */
	public Collection<Movie> getMovieCollection(UnorderedSet<MovieAttribute> filterSet, int limit, int offset);
	
	/*
	 * (non-Javadoc)
	 * @see we.are.bubblesort.MovieApp.client.QueryService#getFilterSet(we.are.bubblesort.MovieApp.shared.MovieAttribute, int, int)
	 * @param attribute
	 * @param limit
	 * @param offset
	 * @returns OrderedSet<MovieAttribute> OrderedSet of attributes
	 */
	public Collection<MovieAttribute> getAttributeCollection(MovieAttribute attribute, 		int limit, int offset);
	
	public WorldStatisticsModel getWorldStatisticsModel(UnorderedSet<MovieAttribute> filterSet);
}