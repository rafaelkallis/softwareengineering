package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.UnorderedSet;
import we.are.bubblesort.MovieApp.shared.WorldStatisticsModel;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Composite;

public class MapPresenter extends Presenter {
	protected MapViewInterface view;
	protected QueryServiceAsync queryService;

	public MapPresenter(QueryServiceAsync queryService, MapViewInterface view) {
		this.view = view;
		this.queryService = queryService;
	}

	public void loadNewData(UnorderedSet<MovieAttribute> filterSet) {
		queryService.getWorldStatisticsModel(filterSet, new AsyncCallback<WorldStatisticsModel>(){
			@Override
			public void onFailure(Throwable caught) {
				Window.alert("Could not load worldmap data.");
			}

			@Override
			public void onSuccess(WorldStatisticsModel result) {
				view.setModel(result);
				view.update();
			}
		});
	}

	@Override
	public Composite getCompositeView() {
		return (Composite)this.view;
	}

	@Override
	public View getView() {
		return (View)this.view;
	}

	public void export() {
		this.view.startExport();
	}
}
