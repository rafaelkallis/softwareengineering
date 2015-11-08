package we.are.bubblesort.MovieApp.client;

import static org.junit.Assert.*;
import java.util.ArrayList;
import org.junit.Test;
import we.are.bubblesort.MovieApp.client.TableView;

public class TableViewTest {
	
	TableView view = new TableView();
	
	@Test
	public void testAddItem() {
		fail();
	}
	
	@Test
	public void testSetHeaders(){
		ArrayList<String> headers = new ArrayList<String>();
		
		headers.add("Titel");
		headers.add("Länder");
		headers.add("Jahr");
		headers.add("Sprachen");
		headers.add("Genres");
		headers.add("Länge");
		
		this.view.setHeader(headers);
		
		assertEquals(1,this.view.table.getRowCount());
	}
	
	@Test
	public void testAddHandler(){
		fail();
	}

}
