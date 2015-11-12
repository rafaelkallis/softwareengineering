package we.are.bubblesort.MovieApp.shared;

public class MovieYear extends MovieAttribute {
	
	public static final String dbLabelName = "movie_release_year";
	public static final String urlName		= dbLabelName;
	
	public MovieYear(){
		super(null,MovieYear.dbLabelName,MovieYear.urlName,null);
	}
	
	public MovieYear(String value){
		super(value,MovieYear.dbLabelName,MovieYear.urlName,value);
	}
}
