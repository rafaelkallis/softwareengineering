package we.are.bubblesort.MovieApp.shared;

public class MovieYear extends MovieAttribute {
	public static String dbName = "movie_release_year";
	public MovieYear(Integer value){
		super(value,MovieYear.dbName);
	}
}
