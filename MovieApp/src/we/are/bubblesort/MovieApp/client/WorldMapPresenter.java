package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.Composite;

public class WorldMapPresenter extends Presenter {
	protected WorldMapView view;

	@Override
	public Composite getCompositeView() {
		return (Composite)this.view;
	}

	@Override
	public View getView() {
		return (View)this.view;
	}

}
