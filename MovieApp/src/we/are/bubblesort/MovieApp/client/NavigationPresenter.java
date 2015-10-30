package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.shared.Collection;

public class NavigationPresenter {
	protected Collection<Section> sections;
	protected NavigationViewInterface view;

	public NavigationPresenter(NavigationViewInterface navigationView) {
		this.view = navigationView;
	}

	public void setSections(Collection<Section> sections) {
		this.sections = sections;
		
		for (Section currentSection : sections) {
			if (currentSection.showInMainMenu()) {
				this.view.addMenuEntry(currentSection);
			}
		}
	}

	public interface NavigationViewInterface extends ViewInterface {
		void addMenuEntry(Section newSection);
	}
}
