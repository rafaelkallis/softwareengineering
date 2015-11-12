package we.are.bubblesort.MovieApp.shared;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class MovieTest {

	@Before
	public void setUp() throws Exception {
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testToString() {
		Movie movie = new Movie();
		
		movie.id = new MovieID("123456789");
		movie.title = new MovieTitle("Bubblesort");
		movie.year = new MovieYear("2015");
		movie.duration = new MovieDuration("92");
		
		UnorderedSet<MovieLanguage> languages = new UnorderedSet<MovieLanguage>();
		languages.add(new MovieLanguage("German","German"));
		languages.add(new MovieLanguage("German","German"));
		languages.add(new MovieLanguage("German","German"));
		movie.languages = languages;

		UnorderedSet<MovieCountry> countries = new UnorderedSet<MovieCountry>();
		countries.add(new MovieCountry("Switzerland","Switzerland"));
		movie.countries = countries;
		
		UnorderedSet<MovieGenre> genres = new UnorderedSet<MovieGenre>();
		genres.add(new MovieGenre("Drama","Drama"));
		genres.add(new MovieGenre("Drama","Drama"));
		movie.genres = genres;
		
		assertEquals("\"123456789\",\"Bubblesort\",\"2015\",\"92\",\"German,German,German\",\"Switzerland\",\"Drama,Drama\"",movie.toJoinedString(","));
		assertEquals("\"123456789\"\t\"Bubblesort\"\t\"2015\"\t\"92\"\t\"German\tGerman\tGerman\"\t\"Switzerland\"\t\"Drama\tDrama\"",movie.toJoinedString("\t"));
	}

}
