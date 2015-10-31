package we.are.bubblesort.MovieApp.shared;

public class MovieDuration extends MovieAttribute {
	public static String dbName = "movie_runtime";
	public MovieDuration(Integer value){
		super(value,MovieDuration.dbName);
	}
}