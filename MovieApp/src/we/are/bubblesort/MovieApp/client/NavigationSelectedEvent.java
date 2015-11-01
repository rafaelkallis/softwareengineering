package we.are.bubblesort.MovieApp.client;

import com.google.web.bindery.event.shared.Event;

public class NavigationSelectedEvent extends Event<NavigationSelectedEventHandler>{
	public static Type<NavigationSelectedEventHandler> TYPE = new Type<NavigationSelectedEventHandler>();
	
	@Override
	public Event.Type<NavigationSelectedEventHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(NavigationSelectedEventHandler handler) {
		handler.onItemSelected();
	}

}
