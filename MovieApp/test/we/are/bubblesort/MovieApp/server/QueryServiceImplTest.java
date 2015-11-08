package we.are.bubblesort.MovieApp.server;

import static org.junit.Assert.*;
import java.sql.SQLException;
import org.junit.Test;
import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.Movie;
import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.MovieGenre;
import we.are.bubblesort.MovieApp.shared.MovieLanguage;
import we.are.bubblesort.MovieApp.shared.MovieTitle;
import we.are.bubblesort.MovieApp.shared.MovieYear;
import we.are.bubblesort.MovieApp.shared.UnorderedSet;
import we.are.bubblesort.MovieApp.shared.WorldStatisticsModel;

public class QueryServiceImplTest {
	
	QueryServiceImpl queryService = new QueryServiceImpl();

	@Test
	public void test_getMovieCollection() throws SQLException{
		UnorderedSet<MovieAttribute> filters = new UnorderedSet<MovieAttribute>();
		
		filters.add(new MovieTitle("American Pie"));
		filters.add(new MovieGenre("Comedy","Comedy"));
		filters.add(new MovieLanguage("French","French"));
		
		Collection<Movie> movies = null;
		
		 movies = queryService.getMovieCollection(filters, 0, 0);	
	
		 assertNotNull(movies);
		 for(Movie movie : movies){
			 assertEquals("American Pie Presents: The Book of Love",movie.title);
		 }
	}
	
	
	@Test
	public void test_getAttributeCollection() throws SQLException{		
		Collection<MovieAttribute> yearCollection = queryService.getAttributeCollection(new MovieYear("1996"), 0, 0);
		
		assertNotNull(yearCollection);
	}
	
	@Test
	public void test_getWorldStatisticsModel(){
		UnorderedSet<MovieAttribute> filters = new UnorderedSet<MovieAttribute>();
		
		filters.add(new MovieYear("1996"));
		WorldStatisticsModel model = queryService.getWorldStatisticsModel(filters);
		
		assertNotNull(model);
	}


}
