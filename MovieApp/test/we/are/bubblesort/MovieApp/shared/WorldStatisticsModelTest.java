package we.are.bubblesort.MovieApp.shared;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class WorldStatisticsModelTest {

	WorldStatisticsModel model;
	
	@Before
	public void setUp() throws Exception {
		model = new WorldStatisticsModel();
	}

	@After
	public void tearDown() throws Exception {
		model = null;
	}

	@Test
	public void testAdd() {
		assertEquals(0,model.size());		
		model.add(new WorldStatisticsModelEntry("A",new Integer(5),new Float(0.1),new Float(0.5)));
		assertEquals(1,model.size());
	}
}
