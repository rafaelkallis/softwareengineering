package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.Composite;

import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.Set;

public class FilterBarPresenter extends Presenter implements FilterChangedEventHandler {
	protected FilterBarView view;
	protected QueryServiceAsync queryService;
	protected Set<FilterPresenter> presenters = new Set<FilterPresenter>();
	
	FilterBarPresenter(QueryServiceAsync queryService, FilterBarView view) {
		this.view = view;
		this.queryService = queryService;
	}

	public void addFilterFor(Class<? extends MovieAttribute> attributeClass, FilterViewInterface view) {
		FilterPresenter presenter = new FilterPresenter(attributeClass, this.queryService, view);
		this.view.main.add(presenter.getCompositeView());
		
		presenter.addHandler(FilterChangedEvent.TYPE, this);
	}
	
	public Set<MovieAttribute> getFilterValues() {
		Set<MovieAttribute> resultSet = new Set<MovieAttribute>();
		
		for (FilterPresenter presenter : this.presenters) {
			try {
				MovieAttribute attribute = presenter.getAttributeClass().newInstance();
				if (attribute.value instanceof String) {
					attribute.value = presenter.getValue();
				}
				else {
					attribute.value = Integer.parseInt(presenter.getValue());
				}
			} catch (InstantiationException e) {
				e.printStackTrace();
			} catch (IllegalAccessException e) {
				e.printStackTrace();
			}
		}
		
		return resultSet;
	}

	@Override
	public Composite getCompositeView() {
		return (Composite)this.view;
	}

	@Override
	public View getView() {
		return (View)this.view;
	}

	@Override
	public void onFilterValueChanged() {
		this.fireEvent(new FilterChangedEvent());
	}
}
