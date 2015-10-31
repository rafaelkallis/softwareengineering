package we.are.bubblesort.MovieApp.client;

import com.google.web.bindery.event.shared.SimpleEventBus;

public class Presenter extends SimpleEventBus {
	protected View view;
	
	public View getView() {
		return view;
	}
}
