package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Composite;

import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.Movie;
import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.MovieYear;
import we.are.bubblesort.MovieApp.shared.Set;

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
		
		this.filterbar.addFilterFor(MovieYear.class, new FilterListBoxView());
		
		this.filterbar.addHandler(FilterChangedEvent.TYPE, this);
		
		this.view.worldmap.add(this.worldmap.getCompositeView());
		this.view.toolbar.add(this.filterbar.getCompositeView());
	}

	@Override
	public void onFilterValueChanged() {
		Set<MovieAttribute> attributes = this.filterbar.getFilterValues();
		// Call to RPC Service for new data.
		Window.alert("New Data is being fetched");
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
	
	public void callQueryService(Set<MovieAttribute> filterSet){
		queryService.getMovieCollection(filterSet, new AsyncCallback<Collection<Movie>>(){
			public void onFailure(Throwable caught){
				/*
				 * handle Failure
				 */
			}
			public void onSuccess(Collection<Movie> result){
				/*
				 * to something with result
				 */
			}
		});
	}
}
