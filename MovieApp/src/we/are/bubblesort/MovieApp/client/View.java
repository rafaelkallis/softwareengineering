package we.are.bubblesort.MovieApp.client;

import com.google.web.bindery.event.shared.Event;
import com.google.web.bindery.event.shared.HandlerRegistration;

import we.are.bubblesort.MovieApp.shared.EventBus;

public class View extends EventBus implements ViewInterface {
	@Override
	public <H>HandlerRegistration subscribeToEvent(Event.Type<H> type, H handler) {
		return this.addHandler(type, handler);
	}

	@Override
	public void fireEvent(Event<?> event) {
		this.fireEvent(event);
	}
}