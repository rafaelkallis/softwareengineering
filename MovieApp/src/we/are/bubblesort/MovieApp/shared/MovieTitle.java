package we.are.bubblesort.MovieApp.shared;

public final class MovieTitle extends MovieAttribute{
	public static String dbname = "movie_name";
	public MovieTitle(String value){
		super(value,MovieTitle.dbname);
	}
}
