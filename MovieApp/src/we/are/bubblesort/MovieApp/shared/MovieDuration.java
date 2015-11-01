package we.are.bubblesort.MovieApp.shared;

public class MovieDuration extends MovieAttribute {
	public static String dbLabelName = "movie_runtime";
	public MovieDuration(Integer value){
		super(value,MovieDuration.dbLabelName);
	}
}