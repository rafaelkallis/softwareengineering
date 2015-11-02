package we.are.bubblesort.MovieApp.shared;

public class MovieDuration extends MovieAttribute {

	private static final long serialVersionUID = 3302308851329041260L;
	public static final String dbLabelName = "movie_runtime";
	public MovieDuration(Integer value,String displayName){
		super(value,MovieDuration.dbLabelName,displayName);
	}
}