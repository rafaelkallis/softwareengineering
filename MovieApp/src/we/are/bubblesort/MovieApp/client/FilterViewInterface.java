package we.are.bubblesort.MovieApp.client;

import com.google.gwt.event.dom.client.ChangeHandler;
import com.google.web.bindery.event.shared.HandlerRegistration;

public interface FilterViewInterface {
	String getValue();
	public HandlerRegistration addChangeHandler(ChangeHandler handler);
}