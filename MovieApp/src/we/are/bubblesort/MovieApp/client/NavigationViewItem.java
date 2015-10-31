package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.shared.Keyable;

public class NavigationViewItem implements Keyable {
	protected String displayName;
	protected String value;
	
	NavigationViewItem(String displayName, String value) {
		this.displayName = displayName;
		this.value = value;
	}
	
	String getDisplayName() {
		return displayName;
	}
	
	String getValue() {
		return value;
	}
	
	@Override
	public Object getKey() {
		return value;
	}
}
