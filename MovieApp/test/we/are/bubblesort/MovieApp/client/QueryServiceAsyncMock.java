package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.Movie;
import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.UnorderedSet;
import we.are.bubblesort.MovieApp.shared.WorldStatisticsModel;

import com.google.gwt.user.client.rpc.AsyncCallback;

public class QueryServiceAsyncMock implements QueryServiceAsync {

	@Override
	public void getMovieCollection(UnorderedSet<MovieAttribute> filterSet,
			int limit, int offset, AsyncCallback<Collection<Movie>> callback) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void getAttributeCollection(MovieAttribute attribute, int limit,
			int offset, AsyncCallback<Collection<MovieAttribute>> callback) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void getWorldStatisticsModel(UnorderedSet<MovieAttribute> filterSet,
			AsyncCallback<WorldStatisticsModel> callback) {
		// TODO Auto-generated method stub
		
	}

}
