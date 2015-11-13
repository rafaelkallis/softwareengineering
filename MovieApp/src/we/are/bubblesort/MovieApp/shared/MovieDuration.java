package we.are.bubblesort.MovieApp.shared;

public class MovieDuration extends MovieAttribute {

	public static final String dbLabelName = "movie_runtime";
	public static final String urlName		= dbLabelName;
	
	public MovieDuration(){
		super(null,MovieDuration.dbLabelName,MovieDuration.urlName,null);
	}
	
	public MovieDuration(String value){
		super(value,MovieDuration.dbLabelName,MovieDuration.urlName,value);
	}
}