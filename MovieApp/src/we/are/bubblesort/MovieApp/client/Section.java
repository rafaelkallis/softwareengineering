package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.Panel;
import com.google.web.bindery.event.shared.SimpleEventBus;

public abstract class Section extends SimpleEventBus{
	protected String name;
	protected Boolean showInMainMenu = false;
	protected Panel mainPanel;
	protected SimpleEventBus globalEventBus;

	Section(String sectionName, Boolean showInMainMenu, SimpleEventBus globalEventBus) {
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
