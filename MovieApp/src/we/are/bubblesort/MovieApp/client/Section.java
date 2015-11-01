package we.are.bubblesort.MovieApp.client;

public abstract class Section extends Presenter {
	protected String name;
	private static int idCounter = 0;
	private int id;
	protected SectionView view;

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
	abstract void hide();
	abstract void show();
}
