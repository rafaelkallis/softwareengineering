package we.are.bubblesort.MovieApp.client;

import java.util.ArrayList;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Composite;

import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.Movie;
import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.UnorderedSet;


public class TablePresenter extends Presenter implements LoadMoreEventHandler {
	public TableViewInterface view;

	private QueryServiceAsync queryService;
	static Integer movieStep = 20;
	private Integer moviePointer = 0;
	private UnorderedSet<MovieAttribute> filters;
	
	TablePresenter(QueryServiceAsync queryService, TableViewInterface view) {
		this.view = view;
		this.queryService = queryService;
		ArrayList<String> headers = new ArrayList<String>();
		headers.add("Titel");
		headers.add("Länder");
		headers.add("Jahr");
		headers.add("Sprachen");
		headers.add("Genres");
		headers.add("Länge");
		
		this.view.setHeader(headers);
		this.view.addHandler(LoadMoreEvent.TYPE, this);
	}
	
	public void addToTable(Collection<Movie> movies) {
	    for (Movie movie : movies) {
			ArrayList<String> columnValues = new ArrayList<String>();
			
			String title 		= movie.title 		!= null ? movie.title.toString() 				: "";
			String countries 	= movie.countries 	!= null ? movie.countries.toJoinedString(", ") 	: "";
			String year 		= movie.year 		!= null ? movie.year.toString() 				: "";
			String languages 	= movie.languages 	!= null ? movie.languages.toJoinedString(", ") 	: "";
			String genres		= movie.genres 		!= null ? movie.genres.toJoinedString(", ") 	: "";
			String duration 	= movie.duration 	!= null ? movie.duration.toString() 			: "";
			
	    	columnValues.add(title);
	    	columnValues.add(countries);
	    	columnValues.add(year);
	    	columnValues.add(languages);
	    	columnValues.add(genres);
	    	columnValues.add(duration);

		    this.view.addItem(columnValues);
	    }
	}
	
	@Override
	public Composite getCompositeView() {
		return (Composite)this.view;
	}

	@Override
	public View getView() {
		return (View)this.view;
	}
	
	public void update() {
		this.update(new UnorderedSet<MovieAttribute>());
	}
	
	public void update(UnorderedSet<MovieAttribute> filters) {
		this.moviePointer = 0;
		this.filters = filters;
		this.clearTable();
		this.view.hideMoreButton();
		this.loadTable();
	}

	private void clearTable() {
		this.view.clearRows();
	}
	
	protected void loadTable() {
		queryService.getMovieCollection(this.filters, movieStep, moviePointer, new AsyncCallback<Collection<Movie>>(){
			@Override
			public void onFailure(Throwable caught) {
				Window.alert("Could not get table data.");
			}

			@Override
			public void onSuccess(Collection<Movie> result) {
				if (moviePointer == 0) {
					clearTable();
				}
				
				addToTable(result);

				if (result.size() == movieStep) {
					view.showMoreButton();
				}
				else {
					view.hideMoreButton();
				}
			}
		});
	}

	@Override
	public void onLoadMore() {
		this.moviePointer += movieStep;
		this.loadTable();
	}
}
