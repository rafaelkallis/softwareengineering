package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.Composite;
import com.google.web.bindery.event.shared.SimpleEventBus;


public class SectionNavigationPresenter extends Presenter implements NavigationSelectedEventHandler, AppSectionActivatedEventHandler {
	protected NavigationViewInterface view;

	public SectionNavigationPresenter(NavigationViewInterface navigationView, SimpleEventBus navigationEventBus) {
		this.view = navigationView;
		this.view.addNavigationSelectedEventHandler(this);
		navigationEventBus.addHandler(AppSectionActivatedEvent.TYPE, this);
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

	@Override
	public Composite getCompositeView() {
		return (Composite)view;
	}

	@Override
	public View getView() {
		return (View)view;
	}
}
