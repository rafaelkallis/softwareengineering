package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.Panel;

import we.are.bubblesort.MovieApp.shared.EventBus;

public class WorldMapSection extends Section {
	static final String defaultName = "Karte";
	QueryServiceAsync queryService;
	
	WorldMapSection(String sectionName, Boolean showInMainMenu, EventBus globalEventBus, QueryServiceAsync queryService) {
		super(sectionName, showInMainMenu, globalEventBus);
	}
	
	WorldMapSection(Boolean showInMainMenu, EventBus globalEventBus, QueryServiceAsync queryService) {
		this(defaultName, showInMainMenu, globalEventBus, queryService);
	}

	@Override
	void init() {
		this.mainPanel = new FlowPanel();
	}
	
}
