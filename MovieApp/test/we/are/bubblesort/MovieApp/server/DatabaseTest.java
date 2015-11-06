package we.are.bubblesort.MovieApp.server;

import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import we.are.bubblesort.MovieApp.server.Database;
import static org.junit.Assert.*;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DatabaseTest {
	
	protected Database db;
	final protected String testQuery = "SELECT * FROM `movieapp`.`movies`;";

	
	@BeforeClass
	public void setUp(){
		db 						= Database.getInstance();
	}
	
	@Test
	public void test_database_instance() throws SQLException{
		assertNotNull(db);
	}
	
	
	@Test
	public void test_database_prepareStatements() throws SQLException{
		PreparedStatement pst 	= db.prepareStatement(testQuery);
		
		assertNotNull(pst);
	}
	
	@Test 
	public void test_database_execute() throws SQLException{
		ResultSet rs 			= db.execute(db.prepareStatement(testQuery));
		
		assertNotNull(rs);
		assertTrue(rs.next());
	}
}
