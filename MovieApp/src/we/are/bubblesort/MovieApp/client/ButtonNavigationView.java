package we.are.bubblesort.MovieApp.client;

import com.google.gwt.event.shared.HandlerRegistration;

public class ButtonNavigationView extends View implements NavigationViewInterface {

	ButtonNavigationView() {
		
	}
	
	@Override
	public void addItem(NavigationViewItem item) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void activateItem(NavigationViewItem item) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deactivateAllItems() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public NavigationViewItem getSelectedItem() {
		// TODO Auto-generated method stub
		return null;
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
