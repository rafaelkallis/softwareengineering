package we.are.bubblesort.MovieApp.client;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.MovieLanguage;
import we.are.bubblesort.MovieApp.shared.MovieYear;
import we.are.bubblesort.MovieApp.shared.UnorderedSet;

public class TablePresenterTest {

	TablePresenter presenter = new TablePresenter(null,new TableViewMock());

	@Test
	public void testGetDisplayableAttribute(){
		UnorderedSet<MovieAttribute> attributes = new UnorderedSet<MovieAttribute>();
		attributes.add(new MovieYear("1997"));
		attributes.add(new MovieLanguage("English","English"));		
		assertEquals("1997, English",presenter.getDisplayableAttribute(attributes));
		
		attributes = new UnorderedSet<MovieAttribute>();		
		assertEquals("",presenter.getDisplayableAttribute(attributes));
	}

}
