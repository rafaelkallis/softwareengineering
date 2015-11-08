package we.are.bubblesort.MovieApp.shared;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class UnorderedSetTest {

	final String testString = "Hello, World";
	
	final String [] testArray = {"Hello",",","World"};
	
	UnorderedSet<String> set;
	
	@Before
	public void setUp(){
		set = new UnorderedSet<String>();
	}
	
	@After
	public void tearDown(){
		set = null;
	}
	
	@Test
	public void testAdd() {
		set.add(testString);
		set.add(testString);
		
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
