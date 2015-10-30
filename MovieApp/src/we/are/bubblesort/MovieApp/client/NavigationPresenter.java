package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.EventBus;

public class NavigationPresenter extends Presenter implements NavigationMenuSelectedEventHandler, AppSectionActivatedEventHandler {
	protected Collection<Section> sections;
	protected NavigationViewInterface view;
	protected EventBus parentEventBus;

	public NavigationPresenter(NavigationViewInterface navigationView, EventBus parentEventBus) {
		this.view = navigationView;
		this.view.subscribeToEvent(NavigationMenuSelectedEvent.TYPE, this);
	}
	
	@Override
	public void onMenuSelected(Section section) {
		changeToSection(section);
	}
	
	public void setSections(Collection<Section> sections) {
		this.sections = sections;
		
		for (Section currentSection : sections) {
			if (currentSection.showInMainMenu()) {
				this.view.addMenuEntry(currentSection);
			}
		}
	}
	
	public void changeToSection(Section section)
	{
		parentEventBus.fireEvent(new AppActivateSectionEvent(section));
	}

	public interface NavigationViewInterface extends ViewInterface {
		void addMenuEntry(Section newSection);
		void showMenuSelection(Section section);
	}

	@Override
	public void onSectionActivated(Section section) {
		this.view.showMenuSelection(section);
	}
}
