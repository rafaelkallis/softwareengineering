package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.shared.WorldStatModel;

import com.google.gwt.user.client.ui.Composite;

public class MapPresenter extends Presenter {
	protected MapViewInterface view;

	public MapPresenter(MapViewInterface view) {
		this.view = view;
	}
	
	void update(WorldStatModel model) {
		this.view.setModel(model);
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
