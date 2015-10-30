package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.FlowPanel;
import com.google.web.bindery.event.shared.SimpleEventBus;

import com.google.gwt.user.client.ui.Panel;


public class WorldMapSection extends Section {
	static final String defaultName = "Karte";
	QueryServiceAsync queryService;
	
	WorldMapSection(String sectionName, Boolean showInMainMenu, SimpleEventBus globalEventBus, QueryServiceAsync queryService) {
		super(sectionName, showInMainMenu, globalEventBus);
	}
	
	WorldMapSection(Boolean showInMainMenu, SimpleEventBus globalEventBus, QueryServiceAsync queryService) {
		this(defaultName, showInMainMenu, globalEventBus, queryService);
	}

	@Override
	void init() {
		this.mainPanel = new FlowPanel();
	}
	
}
