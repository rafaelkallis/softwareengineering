package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.ui.Composite;

import we.are.bubblesort.MovieApp.shared.MovieAttribute;

public class FilterBarPresenter extends Presenter {
	protected FilterBarView view;
	protected QueryServiceAsync queryService;
	
	FilterBarPresenter(QueryServiceAsync queryService, FilterBarView view) {
		this.view = view;
		this.queryService = queryService;
	}

	public void addFilterFor(Class<? extends MovieAttribute> attributeClass, FilterViewInterface view) {
		FilterPresenter presenter = new FilterPresenter(attributeClass, this.queryService, view);
		this.view.main.add(presenter.getCompositeView());
	}

	@Override
	public Composite getCompositeView() {
		return (Composite)this.view;
	}

	@Override
	public View getView() {
		return (View)this.view;
	}
}
