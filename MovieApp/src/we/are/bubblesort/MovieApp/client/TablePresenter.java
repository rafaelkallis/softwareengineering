package we.are.bubblesort.MovieApp.client;

import java.util.ArrayList;

import com.google.gwt.user.client.ui.Composite;

import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.Movie;
import we.are.bubblesort.MovieApp.shared.MovieID;
import we.are.bubblesort.MovieApp.shared.MovieTitle;
import we.are.bubblesort.MovieApp.shared.MovieCountry;
import we.are.bubblesort.MovieApp.shared.MovieYear;
import we.are.bubblesort.MovieApp.shared.UnorderedSet;
import we.are.bubblesort.MovieApp.shared.MovieLanguage;
import we.are.bubblesort.MovieApp.shared.MovieDuration;
import we.are.bubblesort.MovieApp.shared.MovieGenre;

public class TablePresenter extends Presenter {
	private TableView view = new TableView();
	
	TablePresenter() {
		ArrayList<String> headers = new ArrayList<String>();
		headers.add("Titel");
		headers.add("Laender");
		headers.add("Jahr");
		headers.add("Sprachen");
		headers.add("Genres");
		headers.add("Laenge");
		
		this.view.setHeader(headers);
		
		loadTable();
	}
	
	public void loadTable() {
		Collection<Movie> movies = this.getMovies();
		
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
	
	public Collection<Movie> getMovies() {
		 
		Collection<Movie> movies = new Collection<Movie>();
		 
		movies.add(new Movie(new MovieID(), new MovieTitle("Film 1"), new MovieYear("1999"), new UnorderedSet<MovieLanguage>(), new UnorderedSet<MovieCountry>(), new UnorderedSet<MovieGenre>(), new MovieDuration("3")));
		movies.add(new Movie(new MovieID(), new MovieTitle("Film 2"), new MovieYear("2000"), new UnorderedSet<MovieLanguage>(), new UnorderedSet<MovieCountry>(), new UnorderedSet<MovieGenre>(), new MovieDuration("33")));
		 
		return movies;
		
	}
}
