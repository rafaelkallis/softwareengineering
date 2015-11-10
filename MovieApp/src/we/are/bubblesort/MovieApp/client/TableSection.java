package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.shared.MovieCountry;
import we.are.bubblesort.MovieApp.shared.MovieDuration;
import we.are.bubblesort.MovieApp.shared.MovieGenre;
import we.are.bubblesort.MovieApp.shared.MovieTitle;
import we.are.bubblesort.MovieApp.shared.MovieYear;

import com.google.gwt.user.client.ui.Composite;

public class TableSection extends Section implements FilterChangedEventHandler {
	static final String defaultName = "Tabelle";
	protected QueryServiceAsync queryService;
	protected TableSectionView view = new TableSectionView();
	protected TablePresenter table;
	protected FilterBarPresenter filterbar;
	
	TableSection(String sectionName, QueryServiceAsync queryService) {
		super(sectionName);
		this.queryService = queryService;
	}
	
	TableSection(QueryServiceAsync queryService) {
		this(defaultName, queryService);
	}

	@Override
	void init() {
		this.table = new TablePresenter(this.queryService, new TableView());
		this.filterbar = new FilterBarPresenter(this.queryService, new FilterBarView());

		FilterPresenter titleFilter = new FilterPresenter(new MovieTitle("0"), queryService, new FilterTextBoxView());
		this.filterbar.addFilter(titleFilter);
		
		FilterPresenter yearFilter = new FilterPresenter(new MovieYear("0"), queryService, new FilterListBoxView());
		this.filterbar.addFilter(yearFilter);
		
		FilterPresenter genreFilter = new FilterPresenter(new MovieGenre("0", "0"), queryService, new FilterListBoxView());
		this.filterbar.addFilter(genreFilter);
		
		FilterPresenter countryFilter = new FilterPresenter(new MovieCountry("0", "0"), queryService, new FilterListBoxView());
		this.filterbar.addFilter(countryFilter);
		
		FilterPresenter durationFilter = new FilterPresenter(new MovieDuration("0"), queryService, new FilterListBoxView());
		this.filterbar.addFilter(durationFilter);

		this.filterbar.addHandler(FilterChangedEvent.TYPE, this);

		this.view.tablePanel.add(this.table.getCompositeView());
		this.view.filterbarPanel.add(this.filterbar.getCompositeView());
		
		this.table.update();
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
	void hide() {
		this.view.hide();
	}

	@Override
	void show() {
		this.view.show();
	}

	@Override
	public void onFilterValueChanged() {
		this.table.update(this.filterbar.getFilterValues());
	}
}
