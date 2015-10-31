package we.are.bubblesort.MovieApp.client;


public class SectionNavigationPresenter extends Presenter implements NavigationSelectedEventHandler, AppSectionActivatedEventHandler {
	protected NavigationViewInterface view;

	public SectionNavigationPresenter(NavigationViewInterface navigationView) {
		this.view = navigationView;
		this.view.addNavigationSelectedEventHandler(this);
	}
	
	@Override
	public void onItemSelected() {
		NavigationViewItem selectedItem = this.view.getSelectedItem();
		this.fireEvent(new AppActivateSectionEvent(Integer.parseInt(selectedItem.getValue())));
	}
	
	public void addMenu(Section section) {
		NavigationViewItem item = new NavigationViewItem(section.getName(), Integer.toString(section.getId()));
		this.view.addItem(item);
	}

	@Override
	public void onSectionActivated(int sectionId) {
		this.view.activateItem(Integer.toString(sectionId));
	}
}
