package we.are.bubblesort.MovieApp.client;

import com.google.gwt.event.shared.HandlerRegistration;

public interface NavigationViewInterface {
	void addItem(NavigationViewItem item);
	void activateItem(String value);
	void deactivateAllItems();
	NavigationViewItem getSelectedItem();
	HandlerRegistration addNavigationSelectedEventHandler(NavigationSelectedEventHandler handler);
	void fireNavigationSelectedEvent();
}
