package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.Composite;

import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.UnorderedSet;

public class FilterBarPresenter extends Presenter implements FilterChangedEventHandler {
	protected FilterBarView view;
	protected QueryServiceAsync queryService;
	protected UnorderedSet<FilterPresenter> presenters = new UnorderedSet<FilterPresenter>();
	
	FilterBarPresenter(QueryServiceAsync queryService, FilterBarView view) {
		this.view = view;
		this.queryService = queryService;
	}

	public void addFilterFor(MovieAttribute attribute, FilterViewInterface view) {
		FilterPresenter presenter = new FilterPresenter(attribute, this.queryService, view);
		this.view.main.add(presenter.getCompositeView());
		this.presenters.add(presenter);
		
		presenter.addHandler(FilterChangedEvent.TYPE, this);
	}
	
	public UnorderedSet<MovieAttribute> getFilterValues() {
		UnorderedSet<MovieAttribute> resultSet = new UnorderedSet<MovieAttribute>();

		for (FilterPresenter presenter : this.presenters) {
			MovieAttribute attribute = presenter.getAttribute();
			resultSet.add(attribute);
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
