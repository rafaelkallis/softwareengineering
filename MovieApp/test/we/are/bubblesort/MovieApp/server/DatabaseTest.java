package we.are.bubblesort.MovieApp.server;

import org.junit.Test;

import we.are.bubblesort.MovieApp.server.Database;
import we.are.bubblesort.MovieApp.shared.*;
import static org.junit.Assert.*;


import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DatabaseTest {
	

	@Test
	public void test_database() throws SQLException{
		Database db			= Database.getInstance();
		assertNotNull(db);
		
		ResultSet rs;
		
		rs = db.execute(db.prepareStatement("SELECT * FROM `movieapp`.`movies`;"));
		assertNotNull(rs);
		assertTrue(rs.next());
	}
}
