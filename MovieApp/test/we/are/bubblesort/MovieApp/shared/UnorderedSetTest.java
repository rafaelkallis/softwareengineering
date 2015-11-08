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
		for(int i=0; i< 10; i++){
			set.add(new String(testString));	
		}
		
		for(String s : set){
			assertEquals(testString,s);
		}
	}

	@Test
	public void testAddGetArray(){
		set.add(testArray);
		assertArrayEquals(testArray, set.get());
	}

}
