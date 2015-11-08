package we.are.bubblesort.MovieApp.client;

import java.text.NumberFormat;
import java.text.ParsePosition;
import java.util.ArrayList;

import com.google.gwt.dom.client.Element;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HasVerticalAlignment;

public class TableView extends View {
	protected FlexTable table = new FlexTable();
	protected Element tableHeader;
	
	TableView() {
		FlowPanel panel = new FlowPanel();
		
		this.table.addStyleName("table table-hover table-fixed");
		panel.add(this.table);
		
		this.setupHeader();
		
		initWidget(panel);
		setStyleName("filter-list-box");
	}
	
	public void setupHeader() {
		 Element thead = DOM.createElement("thead");
         Element tr = DOM.createTR();
         thead.appendChild(tr);
         DOM.insertChild(this.table.getElement(), thead, 0);
         this.tableHeader = tr;
	}
	
	public void setHeader(ArrayList<String> headers) {
		for (String header : headers) {
			Element th = DOM.createTH();
			th.setInnerText(header);
			DOM.appendChild(this.tableHeader, th);
		}
	}
	
	public void addItem(ArrayList<String> item) {
		int start = table.getRowCount();
		
		int column = 0;
		for (String value : item) {
			this.table.setText(start, column, value);
			// align numerical values to the right
			this.table.getCellFormatter().setAlignment(start, column, isNumeric(value) ? HasHorizontalAlignment.ALIGN_RIGHT : HasHorizontalAlignment.ALIGN_LEFT, HasVerticalAlignment.ALIGN_TOP);
			column++;
		}
	}
	
	public static boolean isNumeric(String str)
	{
	  return str.matches("-?\\d+(\\.\\d+)?");  //match a number with optional '-' and decimal.
	}
}
