package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.HTML;

public class TableSection extends Section {
	static final String defaultName = "Tabelle";
	private QueryServiceAsync queryService;
	
	TableSection(String sectionName, QueryServiceAsync queryService) {
		super(sectionName);
		this.queryService = queryService;
	}
	
	TableSection(QueryServiceAsync queryService) {
		this(defaultName, queryService);
	}

	@Override
	void init() {
		this.mainPanel = new FlowPanel();
		this.mainPanel.add(new HTML("<h1>TableSection</h1>"));
		this.setPanelIdentifier("table");
	}
}
