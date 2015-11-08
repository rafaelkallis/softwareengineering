package we.are.bubblesort.MovieApp.client;

import java.util.ArrayList;

import com.google.gwt.dom.client.Element;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HasVerticalAlignment;
import com.google.web.bindery.event.shared.Event.Type;

public class TableView extends View implements TableViewInterface {
	protected FlexTable table = new FlexTable();
	protected Element tableHeader;
	
	TableView() {
		FlowPanel panel = new FlowPanel();
		panel.setStyleName("filter-list-box");
		
		FlowPanel footerContainer = new FlowPanel();
		FlowPanel footer = new FlowPanel();
		footerContainer.addStyleName("tablefooter panel panel-default");
		footer.addStyleName("panel-body");
		Button loadMoreButton = new Button("Mehr anzeigen");
		loadMoreButton.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				fireEvent(new LoadMoreEvent());
			}
		});
		loadMoreButton.addStyleName("btn btn-primary");
		footer.add(loadMoreButton);
		footerContainer.add(footer);
		
		this.table.addStyleName("table table-hover table-fixed");
		this.setupHeader();
		panel.add(this.table);
		panel.add(footerContainer);
		
		initWidget(panel);
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
		int start = this.table.getRowCount();
		
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

	public void clearRows() {
		this.table.clear();
	}

	@Override
	public void addHandler(Type<LoadMoreEventHandler> tYPE, TablePresenter tablePresenter) {
		super.addHandler(tYPE, tablePresenter);
	}
}
