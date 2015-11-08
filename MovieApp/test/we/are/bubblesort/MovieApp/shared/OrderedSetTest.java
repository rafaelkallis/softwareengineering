package we.are.bubblesort.MovieApp.shared;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class OrderedSetTest {

	final String testString = "Hello, World";
	final String [] testArray = {"Hello",",","World"};
	OrderedSet<String> set;
	
	@Before
	public void setUp() throws Exception {
		set = new OrderedSet<String>();
	}

	@After
	public void tearDown() throws Exception {
		set = null;
	}

	@Test
	public void testAdd() {
		set.add(new String(testString));	
		set.add(new String(testString));	
		
		
		for(String s : set){
			assertEquals(testString,s);
		}
		assertEquals(1,set.size());
	}
	
	@Test
	public void testAddGetArray(){
		set.add(testArray);
		assertEquals(3, set.size());
	}
}
