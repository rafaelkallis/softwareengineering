package we.are.bubblesort.MovieApp.server;

import static org.junit.Assert.*;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.junit.After;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.rpc.AsyncCallback;

import we.are.bubblesort.MovieApp.client.QueryService;
import we.are.bubblesort.MovieApp.client.QueryServiceAsync;
import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.Movie;
import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.MovieGenre;
import we.are.bubblesort.MovieApp.shared.MovieID;
import we.are.bubblesort.MovieApp.shared.MovieLanguage;
import we.are.bubblesort.MovieApp.shared.MovieTitle;
import we.are.bubblesort.MovieApp.shared.UnorderedSet;

public class QueryServiceImplTest {
	
	QueryServiceAsync queryService;
	String query;
	
	@BeforeClass
	public void setUpClass() throws Exception {
		queryService = GWT.create(QueryService.class);
	}
	
	@Before
	public void setUp(){
		query		= null;
	}
	
	@After
	public void tearDown() throws SQLException{
		
	}

	@Test
	public void test_getMovieCollection() throws SQLException{
		UnorderedSet<MovieAttribute> filters = new UnorderedSet<MovieAttribute>();
		
		filters.add(new MovieTitle("American Pie"));
		filters.add(new MovieGenre("Comedy","Comedy"));
		filters.add(new MovieLanguage("French","French"));
		
		Collection<Movie> movies = null;
		
		queryService.getMovieCollection(filters, 0, 0, new AsyncCallback<Collection<Movie>>(){
			@Override
			public void onFailure(Throwable e){
				fail(e.getMessage());
			}
			@Override
			public void onSuccess(Collection<Movie> movies){
				assertNotNull(movies);
				for(Movie m : movies){
					assertEquals("American Pie Presents: The Book of Love",m.title);
				}
			}
		});
//		query				= "SELECT * FROM `movieapp`.`movies` WHERE `movie_name` LIKE \"%American Pie%\"  AND `movie_genres` LIKE \"%Comedy%\" AND `movie_languages` LIKE \"%French%\";";
//		
//		pst 				= db.prepareStatement(query);
//		assertNotNull(pst);
//		
//		rs					= db.execute(pst);			
//		assertNotNull(rs);
//		
//		while(rs.next()){
//			String title 	= rs.getString(MovieTitle.dbLabelName);
//			
//			assertFalse(rs.next());
//			assertEquals("American Pie Presents: The Book of Love",title);				
//		}
	
	}
	
	//TODO
	public void test_getAttributeCollection() throws SQLException{
		
		
		
		
	}
	
	//TODO
	public void test_getWorldStatisticsModel(){
		
	}


}
