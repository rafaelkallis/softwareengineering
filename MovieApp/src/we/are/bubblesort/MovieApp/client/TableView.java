package we.are.bubblesort.MovieApp.client;

import java.util.ArrayList;

import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.FlowPanel;

public class TableView extends View implements TableViewInterface {
	protected FlexTable table = new FlexTable();
	
	TableView() {
		FlowPanel panel = new FlowPanel();
		
		this.table.addStyleName("table");
		panel.add(this.table);
		
		initWidget(panel);
		setStyleName("filter-list-box");
	}
	
	public void setHeader(ArrayList<String> headers) {
		int i = 0;
		for (String header : headers) {
			this.table.setText(0, i, header);
			i++;
		}
	}
	
	public void addItem(ArrayList<String> item) {
		int start = table.getRowCount();
		
		int column = 0;
		for (String value : item) {
			this.table.setText(start, column, value);
			column++;
		}
	} 

}
