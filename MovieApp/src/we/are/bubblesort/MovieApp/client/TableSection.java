package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.FlowPanel;
import com.google.web.bindery.event.shared.SimpleEventBus;

public class TableSection extends Section {
	static final String defaultName = "Tabelle";
	private QueryServiceAsync queryService;
	
	TableSection(String sectionName, Boolean showInMainMenu, SimpleEventBus globalEventBus, QueryServiceAsync queryService) {
		super(sectionName, showInMainMenu, globalEventBus);
		this.queryService = queryService;
	}
	
	TableSection(Boolean showInMainMenu, SimpleEventBus globalEventBus, QueryServiceAsync queryService) {
		this(defaultName, showInMainMenu, globalEventBus, queryService);
	}

	@Override
	void init() {
		this.mainPanel = new FlowPanel();
	}
}
