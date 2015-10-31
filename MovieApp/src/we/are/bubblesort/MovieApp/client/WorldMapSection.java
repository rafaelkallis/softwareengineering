package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.HTML;

public class WorldMapSection extends Section {
	static final String defaultName = "Karte";
	QueryServiceAsync queryService;
	
	WorldMapSection(String sectionName, QueryServiceAsync queryService) {
		super(sectionName);
		this.queryService = queryService;
	}
	
	WorldMapSection(QueryServiceAsync queryService) {
		this(defaultName, queryService);
	}

	@Override
	void init() {
		this.mainPanel = new FlowPanel();
		this.mainPanel.add(new HTML("<h1>WorldSection</h1>"));
		this.setPanelIdentifier("world");
	}
	
}
