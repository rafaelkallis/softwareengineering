package we.are.bubblesort.MovieApp.client;

public class NavigationViewItem {
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
	
	/*
	 * value is used as hashing key
	 */
	@Override
	public int hashCode(){
		return value.hashCode();
	}
}
