package we.are.bubblesort.MovieApp.client;

import com.google.web.bindery.event.shared.Event;

public class LoadMoreEvent extends Event<LoadMoreEventHandler>{
	public static Type<LoadMoreEventHandler> TYPE = new Type<LoadMoreEventHandler>();
	
	@Override
	public Event.Type<LoadMoreEventHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(LoadMoreEventHandler handler) {
		handler.onLoadMore();
	}
}