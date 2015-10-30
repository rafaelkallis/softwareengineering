package we.are.bubblesort.MovieApp.client;

import com.google.web.bindery.event.shared.Event;
import com.google.web.bindery.event.shared.HandlerRegistration;

public interface ViewInterface {
	<H>HandlerRegistration subscribeToEvent(Event.Type<H> event, H handler);
	void fireEvent(Event<?> event);
}