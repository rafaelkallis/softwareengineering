package we.are.bubblesort.MovieApp.client;

public abstract class SectionView extends View {
	static final String viewPrefix = "section-";
	
	public void hide() {
		this.addStyleName(viewPrefix + "hidden");
	}

	public void show() {
		this.removeStyleName(viewPrefix + "hidden");
	}

}
