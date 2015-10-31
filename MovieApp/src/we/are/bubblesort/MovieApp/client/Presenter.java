package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.Composite;
import com.google.web.bindery.event.shared.SimpleEventBus;

public abstract class Presenter extends SimpleEventBus {
	
	public abstract Composite getCompositeView();
	
	public abstract View getView();
}
