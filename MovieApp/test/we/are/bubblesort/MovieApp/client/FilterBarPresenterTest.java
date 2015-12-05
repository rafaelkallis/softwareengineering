package we.are.bubblesort.MovieApp.client;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.UnorderedSet;

public class FilterBarPresenterTest {
	FilterBarPresenter filterBar;

	@Before
	public void setUp() throws Exception {
		filterBar = new FilterBarPresenter();
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testaddFilter() {
		int lengthBefore = filterBar.getFilters().size();
		filterBar.addFilter(new FilterPresenter(new MovieAttributeMock("test"), new FilterViewMock()));
		int lengthAfter = filterBar.getFilters().size();
		
		assertEquals(lengthBefore, 0);
		assertEquals(lengthAfter, 1);
	}

	@Test
	public void testGetFilterValues() {
		FilterPresenter filter = new FilterPresenter(new MovieAttributeMock("test"), new FilterViewMock());
		filterBar.addFilter(filter);
		
		UnorderedSet<MovieAttribute> values = filterBar.getFilterValues();
		MovieAttribute firstValue = null;
		
		for (MovieAttribute attribute : values) {
			firstValue = attribute;
			break;
		}
		
		assertNotNull(firstValue);
		assertEquals(firstValue.value, filter.getValue());
	}
}
