package we.are.bubblesort.MovieApp.client;

import com.google.web.bindery.event.shared.Event;

public class ExportReadyEvent extends Event<ExportReadyEventHandler>{
	public static Type<ExportReadyEventHandler> TYPE = new Type<ExportReadyEventHandler>();
	private String url;
	
	ExportReadyEvent(String url) {
		this.url = url;
	}
	
	@Override
	public Event.Type<ExportReadyEventHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(ExportReadyEventHandler handler) {
		handler.onExportReady(this.url);
	}

}
