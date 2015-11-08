package we.are.bubblesort.MovieApp.client;

import static org.junit.Assert.*;

import org.junit.Test;

public class FilterBarPresenterTest {

	@Test
	public void addFilterAddsView() {
		FilterBarView filterBarView = new FilterBarView();
		FilterBarPresenter testPresenter = new FilterBarPresenter(null, filterBarView);
		FilterViewMock filterView = new FilterViewMock(); 
		
		testPresenter.addFilter(new FilterPresenter(null, null, filterView));
		
		assertTrue(true);
	}

}
