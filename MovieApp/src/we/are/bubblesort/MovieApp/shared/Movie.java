package we.are.bubblesort.MovieApp.shared;
import java.util.Set;

public class Movie implements Keyable{
	public MovieID id;
	public MovieTitle title;
	public MovieYear year;
	public Set<MovieLanguage> languages;
	public Set<MovieCountry> countries;
	public MovieDuration duration;
	Movie(	MovieID id,
			MovieTitle title,
			MovieYear year,
			Set<MovieLanguage> languages,
			Set<MovieCountry> countries,
			MovieDuration duration){
		this.id = id;
		this.title= title;
		this.year = year;
		this.languages = languages;
		this.countries = countries;
		this.duration = duration;
	}
	public Object getKey(){
		return this.id.value;
	}
}
