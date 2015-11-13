package we.are.bubblesort.MovieApp.shared;

public final class MovieTitle extends MovieAttribute{
	
	public static final String dbLabelName = "movie_name";
	public static final String urlName		= dbLabelName;
	
	public MovieTitle(){
		super(null,MovieTitle.dbLabelName,MovieTitle.urlName,null);
	}
	
	public MovieTitle(String value){
		super(value,MovieTitle.dbLabelName,MovieTitle.urlName,value);
	}
}
