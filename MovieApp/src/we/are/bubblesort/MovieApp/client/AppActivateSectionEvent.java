package we.are.bubblesort.MovieApp.client;

import com.google.web.bindery.event.shared.Event;

public class AppActivateSectionEvent extends Event<AppActivateSectionEventHandler>{
	public static Type<AppActivateSectionEventHandler> TYPE = new Type<AppActivateSectionEventHandler>();
	private int sectionId;
	
	AppActivateSectionEvent(int sectionId) {
		this.sectionId = sectionId;
	}
	
	@Override
	public Event.Type<AppActivateSectionEventHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(AppActivateSectionEventHandler handler) {
		handler.onActivateSection(sectionId);
	}

}
