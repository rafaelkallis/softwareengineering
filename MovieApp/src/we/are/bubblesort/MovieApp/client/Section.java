package we.are.bubblesort.MovieApp.client;

public abstract class Section extends Presenter {
	protected String name;
	private static int idCounter = 0;
	private int id;
	protected SectionView view;
	protected Boolean initialized = false;
	protected Boolean requiresLogin = false;

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
	
	Boolean isInitialized() {
		return this.initialized;
	}
	
	abstract void init();
	abstract void hide();
	abstract void show();

	public boolean requiresLogin() {
		return this.requiresLogin;
	}
}
