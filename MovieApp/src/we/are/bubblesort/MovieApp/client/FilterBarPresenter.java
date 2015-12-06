package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.Composite;

import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.UnorderedSet;

public class FilterBarPresenter extends Presenter implements FilterChangedEventHandler {
	protected QueryServiceAsync queryService;
	protected UnorderedSet<FilterPresenter> presenters = new UnorderedSet<FilterPresenter>();

	FilterBarPresenter() {
	}
	
	FilterBarPresenter(QueryServiceAsync queryService) {
		this.queryService = queryService;
	}

	public void addFilter(FilterPresenter filter) {
		this.presenters.add(filter);
		
		filter.addHandler(FilterChangedEvent.TYPE, this);
	}
	
	public UnorderedSet<FilterPresenter> getFilters() {
		return this.presenters;
	}
	
	public UnorderedSet<MovieAttribute> getFilterValues() {
		UnorderedSet<MovieAttribute> resultSet = new UnorderedSet<MovieAttribute>();

		for (FilterPresenter presenter : this.presenters) {
			MovieAttribute attribute = presenter.getAttribute();
			
			if (attribute.value != "") {
				resultSet.add(attribute);
			}
		}
		
		return resultSet;
	}

	@Override
	public void onFilterValueChanged() {
		this.fireEvent(new FilterChangedEvent());
	}

	@Override
	public Composite getCompositeView() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public View getView() {
		// TODO Auto-generated method stub
		return null;
	}
}