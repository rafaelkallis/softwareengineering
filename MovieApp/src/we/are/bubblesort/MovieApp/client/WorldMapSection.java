package we.are.bubblesort.MovieApp.client;

import java.util.Date;

import com.google.gwt.user.client.ui.Composite;

import we.are.bubblesort.MovieApp.shared.MovieYear;

public class WorldMapSection extends Section implements FilterChangedEventHandler {
	static final String defaultName = "Karte";
	protected QueryServiceAsync queryService;
	protected WorldMapSectionView view;
	protected MapPresenter worldmap;
	protected FilterBarPresenter filterbar;
	
	WorldMapSection(String sectionName, QueryServiceAsync queryService) {
		super(sectionName);
		this.queryService = queryService;
		this.view = new WorldMapSectionView();
	}
	
	WorldMapSection(QueryServiceAsync queryService) {
		this(defaultName, queryService);
	}

	@Override
	void init() {
		this.initialized = true;
		this.worldmap = new MapPresenter(this.queryService, new WorldMapView());
		this.filterbar = new FilterBarPresenter(this.queryService);
		
		FilterPresenter yearFilter = new FilterPresenter(new MovieYear(""), queryService, new RangeSliderView());
		this.filterbar.addFilter(yearFilter);

		this.filterbar.addHandler(FilterChangedEvent.TYPE, this);
		
		this.view.worldmap.add(this.worldmap.getCompositeView());
		this.view.yearFilter.add(yearFilter.getCompositeView());
		
		// set yearfilter to current year
		@SuppressWarnings("deprecation")
		int year = new Date().getYear();
		yearFilter.setValue(Integer.toString(year + 1900));
	}

	@Override
	public void onFilterValueChanged() {
		this.worldmap.loadNewData(this.filterbar.getFilterValues());
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
}
