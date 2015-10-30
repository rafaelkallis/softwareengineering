package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.Panel;

import we.are.bubblesort.MovieApp.shared.EventBus;

public abstract class Section {
	protected String name = "";
	protected Boolean showInMainMenu = false;
	protected Panel mainPanel;
	protected EventBus globalEventBus;

	Section(String sectionName, Boolean showInMainMenu, EventBus globalEventBus) {
		this.showInMainMenu = showInMainMenu;
		this.name = sectionName;
		this.globalEventBus = globalEventBus;
	}

	String getName() {
		return this.name;
	}
	
	Boolean showInMainMenu() {
		return this.showInMainMenu;
	}
	
	abstract void init();
	
	Panel getPanel() {
		return this.mainPanel;
	}

	public void hide() {
		this.mainPanel.getElement().addClassName("section-hidden");
	}

	public void show() {
		this.mainPanel.getElement().removeClassName("section-hidden");
	}
}
