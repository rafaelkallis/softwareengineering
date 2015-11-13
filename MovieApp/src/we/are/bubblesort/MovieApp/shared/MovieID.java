package we.are.bubblesort.MovieApp.shared;

public class MovieID extends MovieAttribute{
	
	public static final String dbLabelName = "id";
	public static final String urlName		= dbLabelName;
	
	public MovieID(){
		super(null,MovieID.dbLabelName,MovieID.urlName,null);
	}
	
	public MovieID(String value){
		super(value,MovieID.dbLabelName,MovieID.urlName,value.toString());
	}
}
