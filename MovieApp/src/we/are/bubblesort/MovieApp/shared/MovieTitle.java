package we.are.bubblesort.MovieApp.shared;

public final class MovieTitle extends MovieAttribute{
	
	private static final long serialVersionUID = 2742166976562894054L;
	public static final String dbLabelName = "movie_name";
	public MovieTitle(String value,String displayName){
		super(value,MovieTitle.dbLabelName,displayName);
	}
}
