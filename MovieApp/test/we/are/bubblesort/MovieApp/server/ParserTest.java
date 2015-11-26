package we.are.bubblesort.MovieApp.server;

import static org.junit.Assert.*;
import java.io.IOException;
import org.junit.Test;

import we.are.bubblesort.MovieApp.server.Parser;

public class ParserTest {

	Parser parser = Parser.getInstance();
	
	@Test
	public void testParse() throws IOException {
		String tsv_string0 = "31138563	/m/0gh76d7	A Royal Divorce	1926			{}	{}	{\"/m/03g3w\": \"History\", \"/m/07s9rl0\": \"Drama\"}";
		String[][] parsed0 = parser.parseTSV(tsv_string0);
		assertEquals("31138563",						parsed0[0][0].toString());
		assertEquals("/m/0gh76d7",						parsed0[1][0].toString());
		assertEquals("A Royal Divorce",					parsed0[2][0].toString());
		assertEquals("1926",							parsed0[3][0].toString());
		assertEquals("1926",							parsed0[4][0].toString());
		assertEquals("",								parsed0[5][0].toString());
		assertEquals("",								parsed0[6][0].toString());
		assertEquals("",								parsed0[7][0].toString());
		assertEquals("",								parsed0[8][0].toString());
		assertEquals("History, Drama",					parsed0[9][0].toString());
		
		String tsv_string1 = "9919728	/m/06_y9vs	Voy a hablar de la esperanza	1966-10-10			{\"/m/06nm1\": \"Spanish Language\"}	{\"/m/0jgd\": \"Argentina\"}	{\"/m/07s9rl0\": \"Drama\"}";
		String[][] parsed1 = parser.parseTSV(tsv_string1);

		assertEquals("9919728",							parsed1[0][0].toString());
		assertEquals("/m/06_y9vs",						parsed1[1][0].toString());
		assertEquals("Voy a hablar de la esperanza",	parsed1[2][0].toString());
		assertEquals("1966-10-10",						parsed1[3][0].toString());
		assertEquals("1966",							parsed1[4][0].toString());
		assertEquals("",								parsed1[5][0].toString());
		assertEquals("",								parsed1[6][0].toString());
		assertEquals("Spanish Language",				parsed1[7][0].toString());
		assertEquals("Argentina",						parsed1[8][0].toString());
		assertEquals("Drama",							parsed1[9][0].toString());
	}
	
	@Test
	public void testQuotes() throws IOException{
		String tsv_string0 = "31138563	/m/0gh76d7	\"A Royal\" Divorce	1926			{}	{}	{\"/m/03g3w\": \"History\", \"/m/07s9rl0\": \"Drama\"}";
		String[][] parsed0 = parser.parseTSV(tsv_string0);
		assertEquals("31138563",						parsed0[0][0].toString());
		assertEquals("/m/0gh76d7",						parsed0[1][0].toString());
		assertEquals("\"A Royal\" Divorce",				parsed0[2][0].toString());
		assertEquals("1926",							parsed0[3][0].toString());
		assertEquals("1926",							parsed0[4][0].toString());
		assertEquals("",								parsed0[5][0].toString());
		assertEquals("",								parsed0[6][0].toString());
		assertEquals("",								parsed0[7][0].toString());
		assertEquals("",								parsed0[8][0].toString());
		assertEquals("History, Drama",					parsed0[9][0].toString());
	}

}
