package we.are.bubblesort.MovieApp.client;

import java.util.ArrayList;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Composite;

import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.Movie;

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
	    	columnValues.add("DAMNIT ALSO COUNTRIES");
	    	columnValues.add(movie.year.displayName);
	    	columnValues.add("GOSHHHHHHH ALSO LANGUAGES");
	    	columnValues.add("WE NEED GENRES GENRES FOR THE WORLD");
	    	columnValues.add(movie.duration.displayName);
		    
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
