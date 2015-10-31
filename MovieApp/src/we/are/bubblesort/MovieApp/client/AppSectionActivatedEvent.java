package we.are.bubblesort.MovieApp.client;

import com.google.web.bindery.event.shared.Event;

public class AppSectionActivatedEvent extends Event<AppSectionActivatedEventHandler>{
	public static Type<AppSectionActivatedEventHandler> TYPE = new Type<AppSectionActivatedEventHandler>();
	private int sectionId;
	
	AppSectionActivatedEvent(int sectionId) {
		this.sectionId = sectionId;
	}
	
	@Override
	public Event.Type<AppSectionActivatedEventHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(AppSectionActivatedEventHandler handler) {
		handler.onSectionActivated(sectionId);
	}

}
