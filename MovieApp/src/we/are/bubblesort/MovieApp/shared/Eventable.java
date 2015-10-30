package we.are.bubblesort.MovieApp.shared;

import com.google.web.bindery.event.shared.Event;
import com.google.web.bindery.event.shared.HandlerRegistration;

public interface Eventable {
	<H>HandlerRegistration subscribeToEvent(Event.Type<H> event, H handler);
	void fireEvent(Event<?> event);
}
