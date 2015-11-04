package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Composite;

import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.Movie;
import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.UnorderedSet;

public class TableSection extends Section {
	static final String defaultName = "Tabelle";
	protected QueryServiceAsync queryService;
	protected TableSectionView view;
	
	TableSection(String sectionName, QueryServiceAsync queryService) {
		super(sectionName);
		this.queryService = queryService;
		this.view = new TableSectionView();
	}
	
	TableSection(QueryServiceAsync queryService) {
		this(defaultName, queryService);
	}

	@Override
	void init() {
		
		// this.view.add(this.getCompositeView());
		this.view.loadTable();
		this.view.showMovies();
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
				/*
				 * handle Failure
				 */
				Window.alert("That failed: Movie Database cannot be accessed.");
			}
			public void onSuccess(Collection<Movie> result){
				/*
				 * to something with result
				 */
				// get MovieCollection datas
			}
		});
	}
}
