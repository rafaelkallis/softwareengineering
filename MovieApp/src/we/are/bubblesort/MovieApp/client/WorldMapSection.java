package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Composite;

import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.Movie;
import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.MovieYear;
import we.are.bubblesort.MovieApp.shared.UnorderedSet;

public class WorldMapSection extends Section implements FilterChangedEventHandler {
	static final String defaultName = "Karte";
	protected QueryServiceAsync queryService;
	protected WorldMapSectionView view;
	protected WorldMapPresenter worldmap;
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
		this.worldmap = new WorldMapPresenter();
		this.filterbar = new FilterBarPresenter(this.queryService, new FilterBarView());
		
		this.filterbar.addFilterFor(new MovieYear(0,"0"), new FilterListBoxView());
		
		this.filterbar.addHandler(FilterChangedEvent.TYPE, this);
		
		this.view.worldmap.add(this.worldmap.getCompositeView());
		this.view.toolbar.add(this.filterbar.getCompositeView());
	}

	@Override
	public void onFilterValueChanged() {
		UnorderedSet<MovieAttribute> attributes = this.filterbar.getFilterValues();
		// Call to RPC Service for new data.
		Window.alert("New Data is being fetched");
		callQueryService(attributes);
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
	
	public void callQueryService(UnorderedSet<MovieAttribute> filterSet){
		queryService.getMovieCollection(filterSet, new AsyncCallback<Collection<Movie>>(){
			public void onFailure(Throwable caught){
				Window.alert("That failed");
			}
			public void onSuccess(Collection<Movie> result){
				Window.alert("That worked");
			}
		});
	}
}
