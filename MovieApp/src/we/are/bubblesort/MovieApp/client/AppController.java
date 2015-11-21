package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Panel;
import com.google.web.bindery.event.shared.HandlerRegistration;

import we.are.bubblesort.MovieApp.shared.Collection;

public final class AppController extends Presenter implements AppActivateSectionEventHandler {
	private AppView view;
	private QueryServiceAsync queryService;
	private Collection<Section> sections = new Collection<Section>();
	private SectionNavigationPresenter mainNavigation;
	
	HandlerRegistration AppActivateSectionEventHandlerRegistration;
	
	public AppController(QueryServiceAsync queryService) {
		this(queryService, new AppView());
	}

	public AppController(QueryServiceAsync queryService, AppView view) {
		this.view = view;
		this.queryService = queryService;
		this.mainNavigation = new SectionNavigationPresenter(new ButtonNavigationView(), this.eventBus);
	}

	public void init(Panel appPanel) {
		this.view.appMainNavigationPanel.add(this.mainNavigation.getCompositeView());

		appPanel.add(this.view);
		this.bind();
		this.setupSections();
	}
	
	public void bind() {
		this.eventBus.addHandler(AppActivateSectionEvent.TYPE, this);
		this.mainNavigation.addHandler(AppActivateSectionEvent.TYPE, this);
	}
	
	private void setupSections() {		
		WorldMapSection world = new WorldMapSection(this.queryService);
		TableSection table = new TableSection(this.queryService);
		ImprintSection imprint = new ImprintSection();
		
		sections.add(world);
		sections.add(table);
		sections.add(imprint);

		this.mainNavigation.addMenu(world);
		this.mainNavigation.addMenu(table);
		
		for (Section currentSection : sections) {
			currentSection.hide();
			this.view.appSectionContainerPanel.add(currentSection.getCompositeView());
		}
		
		this.activateSection(world);
	}
	
	public Section getSectionByName(String name) {
		for (Section section : this.sections) {
			if (section.name == name) {
				return section;
			}
		}
		
		return null;
	}
	
	public Section getSectionById(int id) {
		for (Section section : sections) {
			if (section.getId() == id) {
				return section;
			}
		}
		
		return null;
	}

	public void activateSection(Section section) {
		if (!section.isInitialized()) {
			section.init();
		}
		
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
		Section section = this.getSectionById(sectionId);
		
		if (this.getSectionById(sectionId) != null) {
			this.activateSection(section);
		}
	}

	@Override
	public Composite getCompositeView() {
		return (Composite)this.view;
	}

	@Override
	public View getView() {
		return (View)this.view;
	}
}
