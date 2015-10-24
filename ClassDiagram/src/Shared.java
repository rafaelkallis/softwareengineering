
/*
 * Bootstrapping & Section controlling
 */

final class AppController{
	private Object globalEventBus;
	
	private NavigationView 		navigationView;
	private NavigationPresenter navigationPresenter;
	
	void onModuleLoad(){
		//create sections
	}
}

/*
 * Movie
 */
class Movie {
	Movie(	MovieID id,
			MovieTitle title,
			MovieYear year,
			MovieMonth month,
			MovieDay day,
			MovieLanguage[] languages,
			MovieCountry[] countries,
			//MovieRating rating,
			MovieDuration duration){
		this.id = id;
		this.title= title;
		this.year = year;
		this.month= month;
		this.day = day;
		this.languages = languages;
		this.countries = countries;
		//this.rating = rating;
		this.duration = duration;
	}

	public MovieID id;
	public MovieTitle title;
	public MovieYear year;
	public MovieMonth month;
	public MovieDay day;
	public MovieLanguage[] languages;
	public MovieCountry[] countries;
	//public MovieRating rating;
	public MovieDuration duration;
}

abstract class MovieAttribute {
	public Object value;
	MovieAttribute(Object value){
		this.value = value;
	}
}

class MovieTitle extends MovieAttribute {
	MovieTitle(String value){
		super(value);
	}
}

class MovieYear extends MovieAttribute {
	MovieYear(Integer value){
		super(value);
	}
}

class MovieMonth extends MovieAttribute{
	MovieMonth(Integer value){
		super(value);
	}
}

class MovieDay extends MovieAttribute{
	MovieDay(Integer value){
		super(value);
	}
}

class MovieLanguage extends MovieAttribute {
	MovieLanguage(Integer value){
		super(value);
	}
}

class MovieCountry extends MovieAttribute {
	MovieCountry(String value){
		super(value);
	}
}

//class MovieRating extends MovieAttribute {}

class MovieDuration extends MovieAttribute {
	MovieDuration(Integer value){
		super(value);
	}
}

class MovieID extends MovieAttribute {
	MovieID(Integer value){
		super(value);
	}
}

/*
 * Import / Export
 */

class ImportRequest{
	
}
class ImportResponse{
	
}
class ExportRequest{
	
}
class ExportResponse{
}

/*
 * Users
 */

class User{
	protected int user_id;
}
class Adminuser extends User{
	
}

/*
 * Event
 */

abstract class Event{
	
}

class FilterChangedEvent extends Event{
	FilterCollection filters;
}

class ActivateSectionEvent extends Event{
	
}

/*
 * Miscallaneous
 */

