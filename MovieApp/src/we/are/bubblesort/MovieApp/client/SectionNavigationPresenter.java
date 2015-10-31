package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.shared.Set;

public class SectionNavigationPresenter extends Presenter implements NavigationSelectedEventHandler, AppSectionActivatedEventHandler {
	protected NavigationViewInterface view;
	protected Set<NavigationViewItem> sections;

	public SectionNavigationPresenter(NavigationViewInterface navigationView) {
		this.view = navigationView;
		this.view.addNavigationSelectedEventHandler(this);
	}
	
	@Override
	public void onItemSelected() {
		NavigationViewItem selectedItem = this.view.getSelectedItem();
		this.fireEvent(new AppActivateSectionEvent((Section)selectedItem.getValue()));
	}
	
	public void addMenu(Section section) {
		NavigationViewItem item = new NavigationViewItem(section.getName(), section);
		this.sections.add(item);
		this.view.addItem(item);
	}

	@Override
	public void onSectionActivated(Section section) {
		this.view.activateItem(new NavigationViewItem(section.getName(), section));
	}
}
