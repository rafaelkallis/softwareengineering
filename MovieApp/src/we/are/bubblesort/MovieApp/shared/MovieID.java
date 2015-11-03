package we.are.bubblesort.MovieApp.shared;

public class MovieID extends MovieAttribute{
	
	public static final String dbLabelName = "id";
	
	public MovieID(){
		super(null,MovieID.dbLabelName,null);
	}
	
	public MovieID(String value){
		super(value,MovieID.dbLabelName,value.toString());
	}
}
