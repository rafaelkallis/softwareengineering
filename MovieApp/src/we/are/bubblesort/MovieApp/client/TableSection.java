package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.shared.MovieCountry;
import we.are.bubblesort.MovieApp.shared.MovieDuration;
import we.are.bubblesort.MovieApp.shared.MovieGenre;
import we.are.bubblesort.MovieApp.shared.MovieLanguage;
import we.are.bubblesort.MovieApp.shared.MovieTitle;
import we.are.bubblesort.MovieApp.shared.MovieYear;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
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
		this.initialized = true;
		this.table = new TablePresenter(this.queryService, new TableView());
		this.filterbar = new FilterBarPresenter(this.queryService);

		FilterPresenter titleFilter = new FilterPresenter(new MovieTitle(""), queryService, new FilterTextBoxView());
		this.filterbar.addFilter(titleFilter);
		this.view.titleFilter.add(titleFilter.getCompositeView());
		
		FilterPresenter yearFilter = new FilterPresenter(new MovieYear(""), queryService, new FilterListBoxView());
		this.filterbar.addFilter(yearFilter);
		this.view.yearFilter.add(yearFilter.getCompositeView());
		
		FilterPresenter genreFilter = new FilterPresenter(new MovieGenre("", ""), queryService, new FilterListBoxView());
		this.filterbar.addFilter(genreFilter);
		this.view.genreFilter.add(genreFilter.getCompositeView());
		
		FilterPresenter countryFilter = new FilterPresenter(new MovieCountry("", ""), queryService, new FilterListBoxView());
		this.filterbar.addFilter(countryFilter);
		this.view.countryFilter.add(countryFilter.getCompositeView());
		
		FilterPresenter durationFilter = new FilterPresenter(new MovieDuration(""), queryService, new FilterListBoxView());
		this.filterbar.addFilter(durationFilter);
		this.view.durationFilter.add(durationFilter.getCompositeView());
		
		FilterPresenter languageFilter = new FilterPresenter(new MovieLanguage("", ""), queryService, new FilterListBoxView());
		this.filterbar.addFilter(languageFilter);
		this.view.languageFilter.add(languageFilter.getCompositeView());

		this.filterbar.addHandler(FilterChangedEvent.TYPE, this);

		this.view.tablePanel.add(this.table.getCompositeView());
		
		this.view.searchButton.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				onFilterValueChanged();
			}
		});
		
		this.update();
	}
	
	private void update() {
		this.table.update(this.filterbar.getFilterValues());
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
		this.update();
	}
}
