package we.are.bubblesort.MovieApp.client;

import java.util.ArrayList;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Composite;

import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.Movie;
import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.UnorderedSet;

public class TablePresenter extends Presenter {
	private TableView view = new TableView();
	private QueryServiceAsync queryService;
	
	TablePresenter(QueryServiceAsync queryService) {
		this.queryService = queryService;
		ArrayList<String> headers = new ArrayList<String>();
		headers.add("Titel");
		headers.add("Laender");
		headers.add("Jahr");
		headers.add("Sprachen");
		headers.add("Genres");
		headers.add("Laenge");
		
		this.view.setHeader(headers);
	}
	
	private void displayTable(Collection<Movie> movies) {
	    for (Movie movie : movies) {
			ArrayList<String> columnValues = new ArrayList<String>();
	    	columnValues.add(movie.title.displayName);
	    	columnValues.add(this.getDisplayableAttribute(movie.countries));
	    	columnValues.add(movie.year.displayName);
	    	columnValues.add(this.getDisplayableAttribute(movie.languages));
	    	columnValues.add(getDisplayableAttribute(movie.genres));
	    	columnValues.add(movie.duration.displayName);
		    
		    this.view.addItem(columnValues);
		    
	    }
	}
	
	public String getDisplayableAttribute(UnorderedSet<? extends MovieAttribute> attributes) {
		
		ArrayList<String> arr = new ArrayList<String>();
		
		for (MovieAttribute attr : attributes) {
			
			arr.add(attr.displayName);
		}
		
		return String.join(", ", arr);
	}
	
	@Override
	public Composite getCompositeView() {
		return (Composite)this.view;
	}

	@Override
	public View getView() {
		return (View)this.view;
	}
	
	public void loadTable() {
		queryService.getMovieCollection(null, 20, 0, new AsyncCallback<Collection<Movie>>(){

			@Override
			public void onFailure(Throwable caught) {
				Window.alert("Could not get table data.");
			}

			@Override
			public void onSuccess(Collection<Movie> result) {
				displayTable(result);
			}
			
		});
	}
}
