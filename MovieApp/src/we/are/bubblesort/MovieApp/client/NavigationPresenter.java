package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.shared.Collection;
import com.google.web.bindery.event.shared.SimpleEventBus;


public class NavigationPresenter extends Presenter implements NavigationMenuSelectedEventHandler, AppSectionActivatedEventHandler {
	protected Collection<Section> sections;
	protected NavigationView view;
	protected SimpleEventBus parentEventBus;

	public NavigationPresenter(NavigationView navigationView, SimpleEventBus parentEventBus) {
		this.view = navigationView;
		this.view.addHandler(NavigationMenuSelectedEvent.TYPE, this);
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

	// Use NavigationView (reason: more powerful than interface)
//	public interface NavigationViewInterface {
//		void addMenuEntry(Section newSection);
//		void showMenuSelection(Section section);
//	}

	@Override
	public void onSectionActivated(Section section) {
		this.view.showMenuSelection(section);
	}
}
