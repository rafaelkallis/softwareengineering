package we.are.bubblesort.MovieApp.client;

import com.google.gwt.event.dom.client.ChangeHandler;
import com.google.web.bindery.event.shared.HandlerRegistration;

import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.Movie;

public class FilterViewMock implements FilterViewInterface {

	Collection<Movie> movies = new Collection<Movie>();
	
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
