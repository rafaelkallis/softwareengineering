package we.are.bubblesort.MovieApp.shared;

public final class MovieTitle extends MovieAttribute{
	
	public static final String dbLabelName = "movie_name";
	
	public MovieTitle(){
		super(null,MovieTitle.dbLabelName,null);
	}
	
	public MovieTitle(String value){
		super(value,MovieTitle.dbLabelName,value);
	}
}
