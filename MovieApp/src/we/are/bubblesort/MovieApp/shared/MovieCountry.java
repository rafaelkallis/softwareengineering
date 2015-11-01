package we.are.bubblesort.MovieApp.shared;

public class MovieCountry extends MovieAttribute {
	public static String dbName = "movie_countries";
	MovieCountry(String value){
		super(value,MovieCountry.dbName);
	}
}