package we.are.bubblesort.MovieApp.client;

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
		this.worldmap = new MapPresenter(this.queryService, new WorldMapView());
		this.filterbar = new FilterBarPresenter(this.queryService, new FilterBarView());
		
		this.filterbar.addFilterFor(new MovieYear("0"), new FilterListBoxView());

		this.filterbar.addHandler(FilterChangedEvent.TYPE, this);
		
		this.view.worldmap.add(this.worldmap.getCompositeView());
		this.view.toolbar.add(this.filterbar.getCompositeView());
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
