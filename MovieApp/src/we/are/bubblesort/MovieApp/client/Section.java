package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.Panel;
import com.google.web.bindery.event.shared.SimpleEventBus;

public abstract class Section extends SimpleEventBus{
	static final String panelPrefix = "section";
	protected String name;
	protected Panel mainPanel;

	Section(String sectionName) {
		this.name = sectionName;
	}

	String getName() {
		return this.name;
	}
	
	abstract void init();
	
	Panel getPanel() {
		return this.mainPanel;
	}
	
	void setPanelIdentifier(String id) {
		this.getPanel().setStyleName(panelPrefix + "-" + id);
		this.getPanel().setStyleName(panelPrefix);
	}

	public void hide() {
		this.mainPanel.getElement().addClassName(panelPrefix + "-hidden");
	}

	public void show() {
		this.mainPanel.getElement().removeClassName(panelPrefix + "-hidden");
	}
}
