package we.are.bubblesort.MovieApp.client;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import we.are.bubblesort.MovieApp.shared.Collection;

public class AppControllerTest {
	AppController appController;
	AppViewMock appView;
	String testSectionName = "testsectionname";
	Section testSection = new SectionMock(testSectionName);

	@Before
	public void setUp() throws Exception {
		Collection<Section> sections = new Collection<Section>();
		sections.add(testSection);
		appController = new AppController(sections);
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testGetSectionByName() {
		Section returnSection = appController.getSectionByName(testSectionName);
		
		assertEquals(returnSection.getName(), testSectionName);
	}
	
	@Test
	public void testGetSectionById() {
		Section returnSection = appController.getSectionById(testSection.getId());
		
		assertEquals(returnSection.getName(), testSectionName);
	}
}
