
interface MovieAttributeInterface {
}

class MovieTitle implements MovieAttributeInterface {}

class MovieYear implements MovieAttributeInterface {}

class MovieLanguage implements MovieAttributeInterface {}

class MovieCountry implements MovieAttributeInterface {}

class MovieRating implements MovieAttributeInterface {}

class MovieDuration implements MovieAttributeInterface {}

class MovieID implements MovieAttributeInterface {}

class Movie {
	public MovieID id;
	public MovieTitle title;
	public MovieYear year;
	public MovieLanguage[] languages;
	public MovieCountry[] countries;
	public MovieRating rating;
	public MovieDuration duration;
}