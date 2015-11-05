package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.UnorderedSet;
import com.google.gwt.user.client.ui.Composite;

public class MapPresenter extends Presenter {
	protected MapViewInterface view;
	protected QueryServiceAsync queryService;

	public MapPresenter(QueryServiceAsync queryService, MapViewInterface view) {
		this.view = view;
		this.queryService = queryService;
	}

	public void loadNewData(UnorderedSet<MovieAttribute> filterSet) {
		/*
		queryService.getMovieCollection(filterSet,0,0, new AsyncCallback<Collection<Movie>>(){
			public void onFailure(Throwable caught){
				Window.alert("Could not fetch new worldmap data.");
			}
			public void onSuccess(Collection<Movie> result){
				Window.alert("That worked.");
			}
		});
		*/
		
	}

	@Override
	public Composite getCompositeView() {
		return (Composite)this.view;
	}

	@Override
	public View getView() {
		return (View)this.view;
	}
}
