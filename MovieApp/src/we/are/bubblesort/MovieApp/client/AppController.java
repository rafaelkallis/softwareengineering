package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.RootPanel;

import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.EventBus;

public class AppController implements AppActivateSectionEventHandler {
	private RootPanel rootPanel;
	private QueryServiceAsync queryService;
	private EventBus globalEventBus;
	private Collection<Section> sections = new Collection<Section>();
	private NavigationPresenter navigation;

	public AppController(QueryServiceAsync queryService, EventBus eventBus) {
		this.queryService = queryService;
		this.globalEventBus = eventBus;

		sections.add(new WorldMapSection(true, this.globalEventBus, this.queryService));
		sections.add(new TableSection(true, this.globalEventBus, this.queryService));
		
		globalEventBus.addHandler(AppActivateSectionEvent.TYPE, this);
	}

	public void init(RootPanel rootPanel) {
		this.rootPanel = rootPanel;
		this.navigation = new NavigationPresenter(new NavigationView(), this.globalEventBus);
		this.navigation.setSections(sections);
		
		for (Section currentSection : sections) {
			currentSection.init();
			currentSection.hide();
			this.rootPanel.add(currentSection.getPanel());
		}
	}
	
	public void activateSection(Section section) {
		hideAllSections();
		section.show();
		globalEventBus.fireEvent(new AppSectionActivatedEvent(section));
	}
	
	public void hideAllSections() {
		for (Section currentSection : sections) {
			currentSection.hide();
		}
	}

	@Override
	public void onActivateSection(Section section) {
		activateSection(section);
	}
}
