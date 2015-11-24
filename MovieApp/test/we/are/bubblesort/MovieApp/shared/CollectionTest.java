package we.are.bubblesort.MovieApp.shared;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;

import we.are.bubblesort.MovieApp.shared.Collection;

import org.junit.Test;

public class CollectionTest {

	final String testString = "Hello, World";
	final String [] testArray = {"Hello",",","World"};
	Collection<String> collection;
	
	@Before
	public void setUp(){
		collection = new Collection<String>();
	}
	
	@After
	public void tearDown(){
		collection = null;
	}
	
	@Test
	public void testAdd() {
		for(int i=0; i< 10; i++){
			collection.add(new String(testString));	
		}
		
		for(String s : collection){
			assertEquals(testString,s);
		}
		assertEquals(10,collection.size());
	}

	@Test
	public void testAddGetArray(){
		collection.add(testArray);
		
		assertArrayEquals(testArray, collection.toArray(new String[testArray.length]));
	}
	
	@Test
	public void testToString(){
		collection.add("English");
		collection.add("German");
		collection.add("French");
		
		String delimiter = "-";
		
		assertEquals("English"+delimiter+"German"+delimiter+"French",collection.toJoinedString(delimiter));
	}
}
