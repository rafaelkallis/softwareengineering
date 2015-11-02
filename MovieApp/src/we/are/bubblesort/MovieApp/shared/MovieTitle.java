package we.are.bubblesort.MovieApp.shared;

public final class MovieTitle extends MovieAttribute{
	public static final String dbLabelName = "movie_name";
	public MovieTitle(String value,String displayName){
		super(value,MovieTitle.dbLabelName,displayName);
	}
}
