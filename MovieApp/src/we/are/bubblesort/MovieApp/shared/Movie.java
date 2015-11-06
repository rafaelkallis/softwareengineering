package we.are.bubblesort.MovieApp.shared;

import we.are.bubblesort.MovieApp.shared.UnorderedSet;
import com.google.gwt.user.client.rpc.IsSerializable;

public class Movie implements IsSerializable{
	public MovieID id;
	public MovieTitle title;
	public MovieYear year;
	public UnorderedSet<MovieLanguage> languages;
	public UnorderedSet<MovieCountry> countries;
	
	public MovieDuration duration;
	public Movie(	MovieID id,
					MovieTitle title,
					MovieYear year,
					we.are.bubblesort.MovieApp.shared.UnorderedSet<MovieLanguage> languages,
					we.are.bubblesort.MovieApp.shared.UnorderedSet<MovieCountry> countries,
					MovieDuration duration){
		this.id = id;
		this.title= title;
		this.year = year;
		this.languages = languages;
		this.countries = countries;
		this.duration = duration;
	}

	@Override
	public int hashCode(){
		return id.hashCode();
	}
/*	
	public MovieID getID() {
		
		return this.id;
	}

	public MovieTitle getTitle() {
		
		return this.title;
	}
	
	public MovieYear getYear() {
		
		return this.year;
	}

	public UnorderedSet getLanguage() {
		
		return this.languages;
	}
	
	public UnorderedSet getCountry() {
		
		return this.countries;
	}
	
	public MovieDuration getDuration() {
		
		return this.duration;
	}
*/
}
