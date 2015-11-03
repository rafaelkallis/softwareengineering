package we.are.bubblesort.MovieApp.shared;

public class MovieGenre extends MovieAttribute {
	public static final String dbLabelName = "movie_genre";
	public MovieGenre(String value,String displayName){
		super(value,MovieGenre.dbLabelName,displayName);
	}
}
