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
	}

	@Test
	public void testAddGetArray(){
		collection.add(testArray);
		assertArrayEquals(testArray, collection.get());
	}
}
