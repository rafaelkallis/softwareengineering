package we.are.bubblesort.MovieApp.shared;

import static org.junit.Assert.*;
import java.io.IOException;
import org.junit.Test;

public class ParserTest {

	Parser parser = Parser.getInstance();
	
	@Test
	public void testParse() throws IOException {
		String tsv_string0 = "31138563	/m/0gh76d7	A Royal Divorce	1926			{}	{}	{\"/m/03g3w\": \"History\", \"/m/07s9rl0\": \"Drama\"}";
		assertEquals("A Royal Divorce",					parser.parseTSV(tsv_string0)[0]);
		assertEquals("1926",							parser.parseTSV(tsv_string0)[1]);
		assertEquals("",								parser.parseTSV(tsv_string0)[2]);
		assertEquals("",								parser.parseTSV(tsv_string0)[3]);
		assertEquals("",								parser.parseTSV(tsv_string0)[4]);
		assertEquals("",								parser.parseTSV(tsv_string0)[5]);
		assertEquals("History, Drama",					parser.parseTSV(tsv_string0)[6]);
		
		String tsv_string1 = "9919728	/m/06_y9vs	Voy a hablar de la esperanza	1966			{\"/m/06nm1\": \"Spanish Language\"}	{\"/m/0jgd\": \"Argentina\"}	{\"/m/07s9rl0\": \"Drama\"}";
		assertEquals("Voy a hablar de la esperanza",	parser.parseTSV(tsv_string1)[0]);
		assertEquals("1966",							parser.parseTSV(tsv_string1)[1]);
		assertEquals("",								parser.parseTSV(tsv_string1)[2]);
		assertEquals("",								parser.parseTSV(tsv_string1)[3]);
		assertEquals("Spanish Language",				parser.parseTSV(tsv_string1)[4]);
		assertEquals("Argentina",						parser.parseTSV(tsv_string1)[5]);
		assertEquals("Drama",							parser.parseTSV(tsv_string1)[6]);
	}

}
