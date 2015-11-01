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
	
	/*
	 * Database used for querying
	 */
	private Database database;
	
	/*
	 * DEFAULT_LIMIT 	= 0 	-> no limit
	 * DEFAULT_OFFSET 	= 0 	-> no offset
	 */
	public static final int DEFAULT_LIMIT = 0;
	public static final int DEFAULT_OFFSET = 0;
	
	public QueryServiceImpl(Database database){
		this.database = database;
	}
	
	/*
	 * (non-Javadoc)
	 * @see we.are.bubblesort.MovieApp.client.QueryService#getMovieCollection(we.are.bubblesort.MovieApp.shared.Set)
	 * @param filterSet the set of filters sent for querying
	 * @returns Collection<Movie> collection of the queried movies
	 */
	@Override
	public Collection<Movie> getMovieCollection(Set<MovieAttribute> filterSet) {
		Collection<Movie> results = null;
		try{
			results = database.query(filterSet,DEFAULT_LIMIT,DEFAULT_OFFSET);
		}catch (SQLException e){
			e.printStackTrace();
		}
		return results;
	}
	
	/*
	 * (non-Javadoc)
	 * @see we.are.bubblesort.MovieApp.client.QueryService#getMovieCollection(we.are.bubblesort.MovieApp.shared.Set, int, int)
	 * @param filterSet the set of filters sent for querying
	 * @param limit
	 * @param offset
	 * @returns Collection<Movie> collection of the queried movies
	 */
	@Override
	public Collection<Movie> getMovieCollection(Set<MovieAttribute> filterSet, int limit, int offset) {
		Collection<Movie> results = null;
		try{
			results = database.query(filterSet,limit,offset);
		}catch (SQLException e){
			e.printStackTrace();
		}
		return results;
	}

	/*
	 * (non-Javadoc)
	 * @see we.are.bubblesort.MovieApp.client.QueryService#getMovieCollection(we.are.bubblesort.MovieApp.shared.MovieAttribute)
	 * @param filter inserted into a new filterSet
	 * @returns Collection<Movie>
	 */
	@Override
	public Collection<Movie> getMovieCollection(MovieAttribute filter) {
		Set<MovieAttribute> filterSet = new Set<MovieAttribute>();
		filterSet.add(filter);
		return this.getMovieCollection(filterSet);
	}

	/*
	 * (non-Javadoc)
	 * @see we.are.bubblesort.MovieApp.client.QueryService#getMovieCollection(we.are.bubblesort.MovieApp.shared.MovieAttribute, int, int)
	 * @param filter
	 * @param limit
	 * @param offset
	 * @returns Collection<Movie>
	 */
	@Override
	public Collection<Movie> getMovieCollection(MovieAttribute filter, int limit, int offset) {
		Set<MovieAttribute> filterSet = new Set<MovieAttribute>();
		filterSet.add(filter);
		return this.getMovieCollection(filterSet,limit,offset);
	}
}