package we.are.bubblesort.MovieApp.shared;

public class MovieYear extends MovieAttribute {
	public static final String dbLabelName = "movie_release_year";
	public MovieYear(Integer value,String displayName){
		super(value,MovieYear.dbLabelName,displayName);
	}
}
