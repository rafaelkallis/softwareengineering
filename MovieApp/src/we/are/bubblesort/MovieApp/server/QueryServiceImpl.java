package we.are.bubblesort.MovieApp.server;

import we.are.bubblesort.MovieApp.client.QueryService;
import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.Movie;
import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.UnorderedSet;
import we.are.bubblesort.MovieApp.shared.OrderedSet;
import java.sql.SQLException;
import com.google.gwt.user.server.rpc.RemoteServiceServlet;

/**
 * The server-side implementation of the RPC service.
 */
public class QueryServiceImpl extends RemoteServiceServlet implements QueryService {
	
	private static final long serialVersionUID = 3188995100231753240L;

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
	public Collection<Movie> getMovieCollection(UnorderedSet<MovieAttribute> filterSet) {
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
	public Collection<Movie> getMovieCollection(UnorderedSet<MovieAttribute> filterSet, int limit, int offset) {
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
	 * @see we.are.bubblesort.MovieApp.client.QueryService#getFilterSet(we.are.bubblesort.MovieApp.shared.MovieAttribute, int, int)
	 * @param attribute
	 * @param limit
	 * @param offset
	 * @returns OrderedSet<MovieAttribute>
	 */
	@Override
	public OrderedSet<MovieAttribute> getFilterSet(String attributeDbLabelName, int limit, int offset){
		OrderedSet<MovieAttribute> results = null;
		try{
			results = database.reverseQuery(attributeDbLabelName, limit, offset);
		}catch (SQLException e){
			e.printStackTrace();
		}
		return results;
	}

	
	/*
	 * (non-Javadoc)
	 * @see we.are.bubblesort.MovieApp.client.QueryService#getFilterSet(we.are.bubblesort.MovieApp.shared.MovieAttribute, int, int)
	 * @param attribute
	 * @returns OrderedSet<MovieAttribute>
	 */
	@Override
	public OrderedSet<MovieAttribute> getFilterSet(String attributeDbLabelName){
		return this.getFilterSet(attributeDbLabelName, DEFAULT_LIMIT, DEFAULT_OFFSET);
	}
}
