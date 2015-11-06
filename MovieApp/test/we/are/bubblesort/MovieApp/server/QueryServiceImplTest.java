package we.are.bubblesort.MovieApp.server;

import static org.junit.Assert.*;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.junit.Before;
import org.junit.Test;


import we.are.bubblesort.MovieApp.shared.MovieID;
import we.are.bubblesort.MovieApp.shared.MovieTitle;

public class QueryServiceImplTest {

	@Before
	public void setUp() throws Exception {
	}

	@Test
	public void test_getMovieCollection() throws SQLException{
		Database db 			= Database.getInstance();
		final String query1		= "SELECT * FROM `movieapp`.`movies` WHERE `movie_name` LIKE \"%American Pie%\"  AND `movie_genres` LIKE \"%Comedy%\" AND `movie_languages` LIKE \"%French%\";";
		PreparedStatement pst1 	= null;	
		ResultSet rs1			= null;
		
		pst1 				= db.prepareStatement(query1);
		assertNotNull(pst1);
		
		rs1 				= db.execute(pst1);			
		assertNotNull(rs1);
		
		while(rs1.next()){
			String title 	= rs1.getString(MovieTitle.dbLabelName);
			
			assertFalse(rs1.next());
			assertEquals("American Pie Presents: The Book of Love",title);				
		}
	
	}
	
	//TODO
	public void test_getAttributeCollection(){
		Database db 									= Database.getInstance();
		String getAttributeSetS1 						= "";
		PreparedStatement getAttributeSetPS1 			= null;
		ResultSet getAttributeSetRS1					= null;
	}
	
	//TODO
	public void test_getWorldStatisticsModel(){
		Database db = Database.getInstance();
		String getWorldStatisticsModelS1 				= "";
		PreparedStatement getWorldStatisticsModelPS1 	= null;
		ResultSet getWorldStatisticsModelRS1			= null;
	}


}
