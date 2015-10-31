package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.Panel;
import com.google.web.bindery.event.shared.SimpleEventBus;

public abstract class Section extends SimpleEventBus{
	static final String panelPrefix = "section";
	protected String name;
	protected Panel mainPanel;
	private static int idCounter = 0;
	private int id;

	Section(String sectionName) {
		this.name = sectionName;
		idCounter++;
		id = idCounter;
	}
	
	int getId() {
		return id;
	}

	String getName() {
		return this.name;
	}
	
	abstract void init();
	
	Panel getPanel() {
		return this.mainPanel;
	}
	
	void setPanelIdentifier(String panelType) {
		this.getPanel().addStyleName(panelPrefix + "-" + panelType);
		this.getPanel().addStyleName(panelPrefix + "-" + Integer.toString(getId()));
		this.getPanel().addStyleName(panelPrefix);
	}

	public void hide() {
		this.mainPanel.addStyleName(panelPrefix + "-hidden");
	}

	public void show() {
		this.mainPanel.removeStyleName(panelPrefix + "-hidden");
	}
}
