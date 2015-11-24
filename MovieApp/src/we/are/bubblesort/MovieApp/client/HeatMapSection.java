package we.are.bubblesort.MovieApp.client;

import java.util.Date;

import we.are.bubblesort.MovieApp.shared.MovieYear;

import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Hyperlink;

public class HeatMapSection extends Section implements FilterChangedEventHandler  {
	static final String defaultName = "Heatmap";
	protected QueryServiceAsync queryService;
	protected HeatMapSectionView view;
	protected MapPresenter heatmap;
	protected FilterBarPresenter filterbar;

	HeatMapSection(String sectionName, QueryServiceAsync queryService) {
		super(sectionName);
		this.queryService = queryService;
		this.view = new HeatMapSectionView();
	}
	
	HeatMapSection(QueryServiceAsync queryService) {
		this(defaultName, queryService);
	}

	@Override
	void init() {
		this.initialized = true;
		this.heatmap = new MapPresenter(this.queryService, new HeatMapView());
		this.filterbar = new FilterBarPresenter(this.queryService);
		
		FilterPresenter yearFilter = new FilterPresenter(new MovieYear(""), queryService, new RangeSliderView());
		this.filterbar.addFilter(yearFilter);

		this.filterbar.addHandler(FilterChangedEvent.TYPE, this);
		
		this.view.worldmap.add(this.heatmap.getCompositeView());
		this.view.yearFilter.add(yearFilter.getCompositeView());
		
		// set yearfilter to current year
		@SuppressWarnings("deprecation")
		int year = new Date().getYear();
		yearFilter.setValue(Integer.toString(year + 1900));
		
		new ExportPresenter(this.heatmap, this.view.exportbutton);
		
		Hyperlink sourceLink = new Hyperlink("Quelle", "");
		new SourcePresenter(sourceLink);
		this.view.mapannotations.add(sourceLink);
	}

	@Override
	public void onFilterValueChanged() {
		this.heatmap.loadNewData(this.filterbar.getFilterValues());
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
