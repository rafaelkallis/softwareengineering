package we.are.bubblesort.MovieApp.client;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.Movie;
import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.MovieCountry;
import we.are.bubblesort.MovieApp.shared.MovieDuration;
import we.are.bubblesort.MovieApp.shared.MovieLanguage;
import we.are.bubblesort.MovieApp.shared.MovieTitle;
import we.are.bubblesort.MovieApp.shared.MovieYear;
import we.are.bubblesort.MovieApp.shared.UnorderedSet;

public class TablePresenterTest {
	TableViewMock view;
	TablePresenter presenter;
	
	@Before
	public void setUp(){
		view = new TableViewMock();
		presenter = new TablePresenter(null, view);
	}
	
	@Test
	public void testGetDisplayableAttribute(){
		UnorderedSet<MovieAttribute> attributes = new UnorderedSet<MovieAttribute>();
		attributes.add(new MovieYear("1997"));
		attributes.add(new MovieLanguage("English","English"));		
		assertEquals("1997, English",attributes.toJoinedString(", "));
		
		attributes = new UnorderedSet<MovieAttribute>();		
		assertEquals("",attributes.toJoinedString(", "));
	}
	
	@Test
	public void testAddToTable(){
		Collection<Movie> movies = new Collection<Movie>();
		presenter.addToTable(movies);
		
		assertEquals(0, view.getItemsCount());
		
		Movie movie 	= new Movie();
		movie.title		= new MovieTitle("Dummy");
		movie.countries = new UnorderedSet<MovieCountry>();
		movie.year 		= new MovieYear("1996");
		movie.duration 	= new MovieDuration("92");
		
		movies.add(movie);
		presenter.addToTable(movies);
		
		assertEquals(1, view.getItemsCount());
	}

}
