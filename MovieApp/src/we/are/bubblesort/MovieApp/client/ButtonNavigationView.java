package we.are.bubblesort.MovieApp.client;

import java.util.HashMap;
import java.util.Map;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.Panel;

public class ButtonNavigationView extends View implements NavigationViewInterface {
	protected NavigationViewItem selectedItem;
	protected HashMap<String, Button> valueButtonsMapping;
	protected Panel mainPanel;

	ButtonNavigationView() {
		this.mainPanel = new FlowPanel();
		
		initWidget(this.mainPanel);
		setStyleName("button-navigation");
	}
	
	@Override
	public void addItem(NavigationViewItem item) {
		Button button = new Button();
		button.setText(item.getDisplayName());
		valueButtonsMapping.put(item.getValue(), button);
		this.mainPanel.add(button);
		
		final NavigationViewItem thisItem = item;
		
		button.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				selectedItem = thisItem;
				fireNavigationSelectedEvent();
			}
		});
	}

	@Override
	public void activateItem(String value) {
		deactivateAllItems();
		Button button = valueButtonsMapping.get(value);
		
		if (button != null) {
			button.addStyleName("active");
		}
	}

	@Override
	public void deactivateAllItems() {
		for(Map.Entry<String, Button> entry : valueButtonsMapping.entrySet()) {
			Button button = entry.getValue();
			button.removeStyleName("active");
		}
	}

	@Override
	public NavigationViewItem getSelectedItem() {
		return this.selectedItem;
	}
	
	@Override
	public HandlerRegistration addNavigationSelectedEventHandler(NavigationSelectedEventHandler handler) {
		this.addHandler(NavigationSelectedEvent.TYPE, handler);
		return null;
	}

	@Override
	public void fireNavigationSelectedEvent() {
		this.fireEvent(new NavigationSelectedEvent());
		
	}
}
