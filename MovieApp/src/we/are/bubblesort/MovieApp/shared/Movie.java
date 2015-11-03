package we.are.bubblesort.MovieApp.shared;

import we.are.bubblesort.MovieApp.shared.UnorderedSet;
import com.google.gwt.user.client.rpc.IsSerializable;

public class Movie implements IsSerializable{
	public MovieID id;
	public MovieTitle title;
	public MovieYear year;
	public MovieDuration duration;


	public UnorderedSet<MovieLanguage> languages;
	

	public UnorderedSet<MovieCountry> countries;
	

	public UnorderedSet<MovieGenre> genres;
	
	public Movie(){
		
	}
	
	public Movie(	MovieID id,
					MovieTitle title,
					MovieYear year,
					UnorderedSet<MovieLanguage> languages,
					UnorderedSet<MovieCountry> countries,
					UnorderedSet<MovieGenre> genres,
					MovieDuration duration){
		this.id = id;
		this.title= title;
		this.year = year;
		this.languages = languages;
		this.countries = countries;
		this.genres = genres;
		this.duration = duration;
	}

	@Override
	public int hashCode(){
		return id.hashCode();
	}
}
