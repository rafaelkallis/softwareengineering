package we.are.bubblesort.MovieApp.client;

import java.util.List;

import com.google.gwt.user.client.ui.RootPanel;

import we.are.bubblesort.MovieApp.shared.EventBus;

public class AppController {
	private RootPanel rootPanel;
	private QueryServiceAsync queryService;
	private EventBus globalEventBus;
	private List<Section> sections;
	private NavigationPresenter navigation;

	public AppController(QueryServiceAsync queryService, EventBus eventBus) {
		this.queryService = queryService;
		this.globalEventBus = eventBus;

		sections.add(new WorldMapSection(true, this.globalEventBus, this.queryService));
		sections.add(new TableSection(true, this.globalEventBus, this.queryService));
	}

	public void init(RootPanel rootPanel) {
		this.rootPanel = rootPanel;
		this.navigation = new NavigationPresenter(new NavigationView(), sections);
		
		for (Section currentSection : sections) {
			currentSection.init();
			this.rootPanel.add(currentSection.getPanel());
		}
	}
}
