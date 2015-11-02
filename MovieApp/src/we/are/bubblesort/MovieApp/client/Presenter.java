package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.Composite;
import com.google.web.bindery.event.shared.Event;
import com.google.web.bindery.event.shared.HandlerRegistration;
import com.google.web.bindery.event.shared.SimpleEventBus;
import com.google.web.bindery.event.shared.Event.Type;

public abstract class Presenter {
	SimpleEventBus eventBus;
	
	public Presenter(){
		eventBus = new SimpleEventBus();
	}
	
	public void fireEvent(Event<?> e){
		this.eventBus.fireEvent(e);
	}
	
	public <H> HandlerRegistration addHandler(Type<H> type, H handler){
		return this.eventBus.addHandler(type, handler);
	}
	public abstract Composite getCompositeView();
	
	public abstract View getView();
}
