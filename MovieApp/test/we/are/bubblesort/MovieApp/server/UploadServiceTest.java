package we.are.bubblesort.MovieApp.server;

import static org.junit.Assert.*;
import java.io.IOException;
import java.sql.SQLException;
import org.apache.commons.csv.CSVFormat;
import org.junit.Test;
import we.are.bubblesort.MovieApp.shared.MovieImportDAO;

public class UploadServiceTest {

	UploadService US = new UploadService();
	
	@Test
	public void testMakeInsertStatement() throws SQLException, IOException {
		String content = "975900	/m/03vyhn	Ghosts of Mars	2001-08-24	14010832	98.0	{\"/m/02h40lc\": \"English Language\"}	{\"/m/09c7w0\": \"United States of America\"}	{\"/m/01jfsb\": \"Thriller\", \"/m/06n90\": \"Science Fiction\", \"/m/03npn\": \"Horror\", \"/m/03k9fj\": \"Adventure\", \"/m/0fdjb\": \"Supernatural\", \"/m/02kdv5l\": \"Action\", \"/m/09zvmj\": \"Space western\"}";
		MovieImportDAO importDAO = new MovieImportDAO(content,CSVFormat.TDF);
		importDAO.setMovieIDs(new String[]{"123"});
		assertEquals("INSERT INTO `movies` (`movie_name`,`movie_release_year`,`movie_box_office_revenue`,`movie_runtime`,`movie_languages`,`movie_countries`,`movie_genres`) VALUES ('Ghosts of Mars',2001,14010832,98.0,'English Language','United States of America','Thriller, Science Fiction, Horror, Adventure, Supernatural, Action, Space western');",US.makeInsertStatement_movies(importDAO).toString().replaceAll("com.mysql.jdbc.JDBC42PreparedStatement@[a-z0-9]*: ", ""));
		assertEquals("INSERT INTO `movie_languages` (`id`,`movie_languages`) VALUES ('123','English Language');",US.makeInsertStatement_languages(importDAO).toString().replaceAll("com.mysql.jdbc.JDBC42PreparedStatement@[a-z0-9]*: ", ""));
		assertEquals("INSERT INTO `movie_countries` (`id`,`movie_countries`) VALUES ('123','United States of America');",US.makeInsertStatement_countries(importDAO).toString().replaceAll("com.mysql.jdbc.JDBC42PreparedStatement@[a-z0-9]*: ", ""));
		assertEquals("INSERT INTO `movie_genres` (`id`,`movie_genres`) VALUES ('123','Thriller'),('123','Science Fiction'),('123','Horror'),('123','Adventure'),('123','Supernatural'),('123','Action'),('123','Space western');",US.makeInsertStatement_genres(importDAO).toString().replaceAll("com.mysql.jdbc.JDBC42PreparedStatement@[a-z0-9]*: ", ""));
	}
	
	@Test
	public void testDBInsertion(){
		String content = "975900	/m/03vyhn	Ghosts of Mars	2001-08-24	14010832	98.0	{\"/m/02h40lc\": \"English Language\"}	{\"/m/09c7w0\": \"United States of America\"}	{\"/m/01jfsb\": \"Thriller\", \"/m/06n90\": \"Science Fiction\", \"/m/03npn\": \"Horror\", \"/m/03k9fj\": \"Adventure\", \"/m/0fdjb\": \"Supernatural\", \"/m/02kdv5l\": \"Action\", \"/m/09zvmj\": \"Space western\"}\n975900	/m/03vyhn	Ghosts of Mars	2001-08-24	14010832	98.0	{\"/m/02h40lc\": \"English Language\"}	{\"/m/09c7w0\": \"United States of America\"}	{\"/m/01jfsb\": \"Thriller\", \"/m/06n90\": \"Science Fiction\", \"/m/03npn\": \"Horror\", \"/m/03k9fj\": \"Adventure\", \"/m/0fdjb\": \"Supernatural\", \"/m/02kdv5l\": \"Action\", \"/m/09zvmj\": \"Space western\"}\n975900	/m/03vyhn	Ghosts of Mars	2001-08-24	14010832	98.0	{\"/m/02h40lc\": \"English Language\"}	{\"/m/09c7w0\": \"United States of America\"}	{\"/m/01jfsb\": \"Thriller\", \"/m/06n90\": \"Science Fiction\", \"/m/03npn\": \"Horror\", \"/m/03k9fj\": \"Adventure\", \"/m/0fdjb\": \"Supernatural\", \"/m/02kdv5l\": \"Action\", \"/m/09zvmj\": \"Space western\"}";
		US.importContent(content, CSVFormat.TDF);
	}

}
