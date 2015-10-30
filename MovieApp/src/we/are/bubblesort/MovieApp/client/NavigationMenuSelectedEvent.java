package we.are.bubblesort.MovieApp.client;

import com.google.web.bindery.event.shared.Event;

public class NavigationMenuSelectedEvent extends Event<NavigationMenuSelectedEventHandler>{
	public static Type<NavigationMenuSelectedEventHandler> TYPE = new Type<NavigationMenuSelectedEventHandler>();
	private Section section;
	
	NavigationMenuSelectedEvent(Section section) {
		this.section = section;
	}
	
	@Override
	public Event.Type<NavigationMenuSelectedEventHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(NavigationMenuSelectedEventHandler handler) {
		handler.onMenuSelected(section);
	}

}
