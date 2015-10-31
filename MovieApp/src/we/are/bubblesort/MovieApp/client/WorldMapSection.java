package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.FlowPanel;
import com.google.web.bindery.event.shared.SimpleEventBus;

import com.google.gwt.user.client.ui.Panel;


public class WorldMapSection extends Section {
	static final String defaultName = "Karte";
	QueryServiceAsync queryService;
	
	WorldMapSection(String sectionName, QueryServiceAsync queryService) {
		super(sectionName);
		this.mainPanel = new FlowPanel();
	}
	
	WorldMapSection(QueryServiceAsync queryService) {
		this(defaultName, queryService);
	}

	@Override
	void init() {
		this.setPanelIdentifier("world");
	}
	
}
