package we.are.bubblesort.MovieApp.client;

import com.google.web.bindery.event.shared.Event;

public class AppSectionActivatedEvent extends Event<AppSectionActivatedEventHandler>{
	public static Type<AppSectionActivatedEventHandler> TYPE = new Type<AppSectionActivatedEventHandler>();
	private Section section;
	
	AppSectionActivatedEvent(Section section) {
		this.section = section;
	}
	
	@Override
	public Event.Type<AppSectionActivatedEventHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(AppSectionActivatedEventHandler handler) {
		handler.onSectionActivated(section);
	}

}
