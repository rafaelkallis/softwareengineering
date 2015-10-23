
public class Shared {

}

final class AppController{
	
}

abstract class MovieAttribute {
}

class MovieTitle extends MovieAttribute {}

class MovieYear extends MovieAttribute {}

class MovieMonth extends MovieAttribute{}

class MovieDay extends MovieAttribute{}

class MovieLanguage extends MovieAttribute {}

class MovieCountry extends MovieAttribute {}

class MovieRating extends MovieAttribute {}

class MovieDuration extends MovieAttribute {}

class MovieID extends MovieAttribute {}

class Movie {
	Movie(	MovieID id,
			MovieTitle title,
			MovieYear year,
			MovieMonth month,
			MovieDay day,
			MovieLanguage[] languages,
			MovieCountry[] countries,
			MovieRating rating,
			MovieDuration duration){
		this.id = id;
		this.title= title;
		this.year = year;
		this.month= month;
		this.day = day;
		this.languages = languages;
		this.countries = countries;
		this.rating = rating;
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

class ImportRequest{
	
}
class ImportResponse{
	
}
class ExportRequest{
	
}
class ExportResponse{
}

class WorldStatisticsModel{
	
}
class StatisticsModel{
	
}
class FilterModel{
	
}
class MovieCollection{
	
}
class User{
	
}
class Adminuser{
	
}

