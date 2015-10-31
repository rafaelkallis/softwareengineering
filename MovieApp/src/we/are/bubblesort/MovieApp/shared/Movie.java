package we.are.bubblesort.MovieApp.shared;

import we.are.bubblesort.MovieApp.shared.Set;
import com.google.gwt.user.client.rpc.IsSerializable;

public class Movie implements Keyable,IsSerializable{
	public MovieID id;
	public MovieTitle title;
	public MovieYear year;
	public Set<MovieLanguage> languages;
	public Set<MovieCountry> countries;
	
	public MovieDuration duration;
	public Movie(	MovieID id,
					MovieTitle title,
					MovieYear year,
					we.are.bubblesort.MovieApp.shared.Set<MovieLanguage> languages2,
					we.are.bubblesort.MovieApp.shared.Set<MovieCountry> countries2,
					MovieDuration duration){
		this.id = id;
		this.title= title;
		this.year = year;
		this.languages = languages2;
		this.countries = countries2;
		this.duration = duration;
	}
	public Object getKey(){
		return this.id.value;
	}
}
