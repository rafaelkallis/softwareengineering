package we.are.bubblesort.MovieApp.shared;

import com.google.web.bindery.event.shared.SimpleEventBus;
import com.google.web.bindery.event.shared.Event.Type;
import com.google.web.bindery.event.shared.Event;
import com.google.web.bindery.event.shared.HandlerRegistration;
import com.google.gwt.user.client.rpc.IsSerializable;

public abstract class Model implements IsSerializable{
	private SimpleEventBus eventBus;
	
	public Model(){
		eventBus = new SimpleEventBus();
	}
	
	public void fireEvent(Event<?> e){
		this.eventBus.fireEvent(e);
	}
	
	public <H> HandlerRegistration addHandler(Type<H> type, H handler){
		return this.eventBus.addHandler(type, handler);
	}
}
