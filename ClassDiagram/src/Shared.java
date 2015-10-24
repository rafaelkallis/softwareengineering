//import com.google.gwt.event.shared.EventBus;

/*
 * Bootstrapping class
 */

final class AppController{
	private Object GlobalEventBus;
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
	public MovieRating rating;
	public MovieDuration duration;
}

abstract class MovieAttribute {}

class MovieTitle extends MovieAttribute {
	public String value;
}

class MovieYear extends MovieAttribute {
	public Integer value;
}

class MovieMonth extends MovieAttribute{
	public Integer value;
}

class MovieDay extends MovieAttribute{
	public Integer value;
}

class MovieLanguage extends MovieAttribute {
	public String value;
}

class MovieCountry extends MovieAttribute {
	public String value;
}

//class MovieRating extends MovieAttribute {}

class MovieDuration extends MovieAttribute {
	public Integer value;
}

class MovieID extends MovieAttribute {
	public Integer value;
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
	public static int global_user_id;
	public int user_id;
}
class Adminuser extends User{
	
}

