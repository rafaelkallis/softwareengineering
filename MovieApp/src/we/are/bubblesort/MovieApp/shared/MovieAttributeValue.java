package we.are.bubblesort.MovieApp.shared;

public class MovieAttributeValue {
	protected String displayName;
	protected String value;

	public MovieAttributeValue(String value, String displayName) {
		this.displayName = displayName;
		this.value = value;
	}
	
	public MovieAttributeValue(String value) {
		this(value, value);
	}
	
	public String getValue() {
		return this.value;
	}
	
	public String getDisplayName() {
		return this.displayName;
	}
}
