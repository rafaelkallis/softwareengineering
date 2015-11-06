package we.are.bubblesort.MovieApp.client;

import com.google.gwt.event.dom.client.ChangeHandler;
import com.google.web.bindery.event.shared.HandlerRegistration;

public class FilterViewMock implements FilterViewInterface {

	@Override
	public String getValue() {
		return "FilterViewMock";
	}

	@Override
	public void setValue(String value) {
		
	}

	@Override
	public HandlerRegistration addChangeHandler(ChangeHandler handler) {
		return (HandlerRegistration)new Object();
	}

}
