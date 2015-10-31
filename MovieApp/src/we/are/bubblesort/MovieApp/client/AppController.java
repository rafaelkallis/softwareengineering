package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.Panel;
import com.google.web.bindery.event.shared.HandlerRegistration;
import com.google.web.bindery.event.shared.SimpleEventBus;

import we.are.bubblesort.MovieApp.shared.Collection;

public final class AppController extends SimpleEventBus implements AppActivateSectionEventHandler {
	private Panel appPanel;
	private FlowPanel headerPanel;
	private FlowPanel sectionPanel;
	private QueryServiceAsync queryService;
	private Collection<Section> sections = new Collection<Section>();
	private SectionNavigationPresenter mainNavigation;
	
	HandlerRegistration AppActivateSectionEventHandlerRegistration;

	public AppController(QueryServiceAsync queryService) {
		this.queryService = queryService;
		this.mainNavigation = new SectionNavigationPresenter(new ButtonNavigationView());
	}

	public void init(Panel appPanel) {
		appPanel.add(new HTML("<p>HEllo</p>"));
		this.appPanel = appPanel;
		this.headerPanel = new FlowPanel();
		this.sectionPanel = new FlowPanel();
		
		this.appPanel.addStyleName("app");
		this.headerPanel.addStyleName("app-header");
		this.sectionPanel.addStyleName("app-section-container");

		this.appPanel.add(headerPanel);
		this.appPanel.add(sectionPanel);
		
		this.headerPanel.add(this.mainNavigation.getView());
		
		this.bind();
		this.setupSections();
	}
	
	public void bind() {
		this.mainNavigation.addHandler(AppActivateSectionEvent.TYPE, this);
	}
	
	private void setupSections() {		
		WorldMapSection world = new WorldMapSection(this.queryService);
		TableSection table = new TableSection(this.queryService);
		
		sections.add(world);
		sections.add(table);

		this.mainNavigation.addMenu(world);
		this.mainNavigation.addMenu(table);
		
		for (Section currentSection : sections) {
			currentSection.init();
			currentSection.hide();
			this.sectionPanel.add(currentSection.getPanel());
		}
	}
	
	public void activateSection(Section section) {
		hideAllSections();
		section.show();
		this.fireEvent(new AppSectionActivatedEvent(section.getId()));
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
	public void onActivateSection(int sectionId) {
		for (Section section : sections) {
			if (section.getId() == sectionId) {
				activateSection(section);
				break;
			}
		}
	}
}
