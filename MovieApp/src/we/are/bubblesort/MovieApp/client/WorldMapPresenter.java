package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.Composite;

public class WorldMapPresenter extends Presenter {
	protected WorldMapView view = new WorldMapView();

	@Override
	public Composite getCompositeView() {
		return (Composite)this.view;
	}

	@Override
	public View getView() {
		return (View)this.view;
	}

}
