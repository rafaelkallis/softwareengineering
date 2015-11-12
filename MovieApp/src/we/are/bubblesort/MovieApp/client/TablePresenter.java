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
	
	TablePresenter(QueryServiceAsync queryService, TableViewInterface view) {
		this.view = view;
		this.queryService = queryService;
		ArrayList<String> headers = new ArrayList<String>();
		headers.add("Titel");
		headers.add("Länder");
		headers.add("Jahr");
		headers.add("Länge");
		// erst in Sprint 2, wenn Datenbanktabellen ready:
		// headers.add("Sprachen");
		// headers.add("Genres");
		
		this.view.setHeader(headers);
		this.view.addHandler(LoadMoreEvent.TYPE, this);
	}
	
	public void addToTable(Collection<Movie> movies) {
	    for (Movie movie : movies) {
			ArrayList<String> columnValues = new ArrayList<String>();
	    	columnValues.add(movie.title.displayName);
	    	columnValues.add(movie.countries.toJoinedString(", "));
	    	columnValues.add(movie.year.displayName);
	    	columnValues.add(movie.duration.displayName);
	    	// erst in Sprint 2, wenn Datenbanktabellen ready
	    	//columnValues.add(movie.languages.toJoinedString(", "));
	    	//columnValues.add(movie.genres.toJoinedString(", "));
		    
		    this.view.addItem(columnValues);
	    }
	}
	
	/*
	 * each UnorderedSet has a toJoinedString function now
	 */
	@Deprecated
	public String getDisplayableAttribute(UnorderedSet<? extends MovieAttribute> attributes) {
		String display_attribute = "";
		if(attributes.size()==0){
			return display_attribute;
		}
		for (MovieAttribute attr : attributes) {
			display_attribute += attr.displayName + ", ";
		}
		return display_attribute.substring(0, display_attribute.length()-2);
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
		this.moviePointer = 0;
		this.loadTable();
	}

	private void clearTable() {
		this.view.clearRows();
	}
	
	protected void loadTable() {
		queryService.getMovieCollection(new UnorderedSet<MovieAttribute>() , movieStep, moviePointer, new AsyncCallback<Collection<Movie>>(){
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
			}
		});
	}

	@Override
	public void onLoadMore() {
		this.moviePointer += movieStep;
		this.loadTable();
	}
}
