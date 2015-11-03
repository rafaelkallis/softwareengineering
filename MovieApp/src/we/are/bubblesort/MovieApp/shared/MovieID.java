package we.are.bubblesort.MovieApp.shared;

public class MovieID extends MovieAttribute{
	
	public static final String dbLabelName = "id";
	
	public MovieID(){
		
	}
	
	public MovieID(Integer value){
		super(value,MovieID.dbLabelName,value.toString());
	}
}
