package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.Composite;
import com.google.web.bindery.event.shared.Event;
import com.google.web.bindery.event.shared.HandlerRegistration;
import com.google.web.bindery.event.shared.SimpleEventBus;

abstract public class View extends Composite {
	protected SimpleEventBus eventBus = new SimpleEventBus();
	
	public <H>HandlerRegistration addHandler(Event.Type<H> type, H handler) {
		return this.eventBus.addHandler(type, handler);
	}

	public void fireEvent(Event<?> event) {
		this.eventBus.fireEvent(event);
	}
}