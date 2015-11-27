package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Hyperlink;
import com.google.gwt.user.client.ui.Panel;
import com.google.web.bindery.event.shared.HandlerRegistration;

import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.User;

public final class AppController extends Presenter implements AppActivateSectionEventHandler {
	private AppView view;
	private QueryServiceAsync queryService;
	private UserServiceAsync userService;
	private Collection<Section> sections = new Collection<Section>();
	private SectionNavigationPresenter mainNavigation;
	protected AccountPresenter account;
	
	HandlerRegistration AppActivateSectionEventHandlerRegistration;
	
	public AppController(QueryServiceAsync queryService, UserServiceAsync userService) {
		this(queryService, userService, new AppView());
	}

	public AppController(QueryServiceAsync queryService, UserServiceAsync userService, AppView view) {
		this.view = view;
		this.userService = userService;
		this.queryService = queryService;
		this.account = new AccountPresenter(this.userService);
		this.mainNavigation = new SectionNavigationPresenter(new ButtonNavigationView(), this.eventBus);
	}

	public void init(Panel appPanel) {
		this.view.appMainNavigationPanel.add(this.mainNavigation.getCompositeView());

		appPanel.add(this.view);
		this.bind();
		this.setupSections();
		this.setupSecondaryNavigation();
	}

	public void bind() {
		this.eventBus.addHandler(AppActivateSectionEvent.TYPE, this);
		this.mainNavigation.addHandler(AppActivateSectionEvent.TYPE, this);
	}
	
	private void setupSections() {		
		WorldMapSection world = new WorldMapSection(this.queryService);
		HeatMapSection heatmap = new HeatMapSection(this.queryService);
		TableSection table = new TableSection(this.queryService);
		ImprintSection imprint = new ImprintSection();
		AdminAreaSection adminarea = new AdminAreaSection();
		
		sections.add(world);
		sections.add(table);
		sections.add(imprint);
		sections.add(heatmap);
		sections.add(adminarea);

		this.mainNavigation.addMenu(world);
		this.mainNavigation.addMenu(heatmap);
		this.mainNavigation.addMenu(table);
		
		for (Section currentSection : sections) {
			currentSection.hide();
			this.view.appSectionContainerPanel.add(currentSection.getCompositeView());
		}
		
		this.activateSection(world);
	}
	
	private void setupSecondaryNavigation() {
		Hyperlink adminLink = new Hyperlink("Admin", "");
		new SectionChangerPresenter(adminLink, "adminarea");
		
		this.view.appSecondaryNavigationPanel.add(adminLink);
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

	public void activateSection(final Section section) {
		if (section.requiresLogin()) {
			this.account.requiresLogin(new LoginEventHandler() {

				@Override
				public void onSuccess() {
					doSectionActivation(section);
				}
				
			});
		}
		else {
			doSectionActivation(section);
		}
	}
	
	private void doSectionActivation(Section section) {
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

	  
	public User getLocalUser() {
		return this.account.getLocalUser();
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
