package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.RootPanel;
import com.google.web.bindery.event.shared.HandlerRegistration;
import com.google.web.bindery.event.shared.SimpleEventBus;

import we.are.bubblesort.MovieApp.shared.Collection;

public class AppController extends SimpleEventBus implements AppActivateSectionEventHandler {
	private RootPanel rootPanel;
	private QueryServiceAsync queryService;
	private Collection<Section> sections = new Collection<Section>();
	private NavigationPresenter navigation;
	
	HandlerRegistration AppActivateSectionEventHandlerRegistration;

	public AppController(QueryServiceAsync queryService) {
		this.queryService = queryService;

		sections.add(new WorldMapSection(true, this, this.queryService));
		sections.add(new TableSection	(true, this, this.queryService));
		
		AppActivateSectionEventHandlerRegistration = this.addHandler(AppActivateSectionEvent.TYPE, this);
	}

	public void init(RootPanel rootPanel) {
		this.rootPanel = rootPanel;
		this.navigation = new NavigationPresenter(new NavigationView(), this);
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
		this.fireEvent(new AppSectionActivatedEvent(section));
	}
	
	public void hideAllSections() {
		for (Section currentSection : sections) {
			currentSection.hide();
		}
	}

	
	/*
	 * (non-Javadoc)
	 * @see we.are.bubblesort.MovieApp.client.AppActivateSectionEventHandler#onActivateSection(we.are.bubblesort.MovieApp.client.Section)
	 */
	@Override
	public void onActivateSection(Section section) {
		activateSection(section);
	}
}
