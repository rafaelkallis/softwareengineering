package we.are.bubblesort.MovieApp.server;

import static org.junit.Assert.*;
import java.sql.SQLException;
import org.junit.Test;
import we.are.bubblesort.MovieApp.shared.MovieID;
import we.are.bubblesort.MovieApp.shared.MovieTitle;
import we.are.bubblesort.MovieApp.shared.MovieYear;

public class UploadServiceTest {

	UploadService US = new UploadService();
	
	@Test
	public void testMakeInsertStatement() throws SQLException {
		String dbLabelnames[] 	= {MovieID.dbLabelName,MovieTitle.dbLabelName,MovieYear.dbLabelName};
		String values[]			= {"123","Dummy Title",null};
		String table 			= "DummyTable";
		
		assertEquals("INSERT INTO `DummyTable` ('id','movie_name','movie_release_year') VALUES (123,'Dummy Title',null);",US.makeInsertStatement(dbLabelnames, values, table).toString().replaceAll("com.mysql.jdbc.JDBC42PreparedStatement@[a-z0-9]*: ", ""));
	}

}