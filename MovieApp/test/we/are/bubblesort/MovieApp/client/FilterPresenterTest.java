package we.are.bubblesort.MovieApp.client;

import static org.junit.Assert.*;

import org.junit.Test;

import we.are.bubblesort.MovieApp.shared.MovieAttribute;

public class FilterPresenterTest {
	FilterPresenter filterPresenter;
	
	@Test
	public void getAttribute() {
		FilterPresenter filter = new FilterPresenter(new MovieAttributeMock("test"), new FilterViewMock());
		MovieAttribute attribute = filter.getAttribute();
		
		assertNotNull(attribute);
		assertEquals(attribute.value, "test");
	}
	
	@Test
	public void getValue() {
		FilterPresenter filter = new FilterPresenter(new MovieAttributeMock("test"), new FilterViewMock());
		
		assertEquals(filter.getValue(), "test");
	}
}
