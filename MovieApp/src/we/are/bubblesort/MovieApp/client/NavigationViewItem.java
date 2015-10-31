package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.shared.Keyable;

public class NavigationViewItem implements Keyable {
	protected String displayName;
	protected Object value;
	
	NavigationViewItem(String displayName, Object value) {
		this.displayName = displayName;
		this.value = value;
	}
	
	String getDisplayName() {
		return displayName;
	}
	
	Object getValue() {
		return value;
	}
	
	@Override
	public Object getKey() {
		return value;
	}
}
