package we.are.bubblesort.MovieApp.client;

import com.google.web.bindery.event.shared.Event;

public class FilterChangedEvent extends Event<FilterChangedEventHandler>{
	public static Type<FilterChangedEventHandler> TYPE = new Type<FilterChangedEventHandler>();
	
	@Override
	public Event.Type<FilterChangedEventHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(FilterChangedEventHandler handler) {
		handler.onFilterValueChanged();
	}
}