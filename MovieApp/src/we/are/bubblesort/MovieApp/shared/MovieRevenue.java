package we.are.bubblesort.MovieApp.shared;

public class MovieRevenue extends MovieAttribute {
	public static final String dbLabelName = "movie_box_office_revenue";
	public static final String urlName		= dbLabelName;
	
	public MovieRevenue(){
		super(null,MovieRevenue.dbLabelName,MovieRevenue.urlName,null);
	}
	
	public MovieRevenue(String value){
		super(value,MovieRevenue.dbLabelName,MovieRevenue.urlName,value);
	}
	
}
