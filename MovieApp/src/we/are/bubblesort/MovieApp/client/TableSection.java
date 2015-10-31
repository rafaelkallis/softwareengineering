package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.FlowPanel;

public class TableSection extends Section {
	static final String defaultName = "Tabelle";
	private QueryServiceAsync queryService;
	
	TableSection(String sectionName, QueryServiceAsync queryService) {
		super(sectionName);
		this.queryService = queryService;
		this.mainPanel = new FlowPanel();
	}
	
	TableSection(QueryServiceAsync queryService) {
		this(defaultName, queryService);
	}

	@Override
	void init() {
		this.setPanelIdentifier("table");
	}
}
