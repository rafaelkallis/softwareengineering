package we.are.bubblesort.MovieApp.server;

public class DatabaseTester {


	public static void main(String[] args){
		Database db;
		try{
			db = new Database();
			db.checkVersion();
		}catch (Exception e){
			e.printStackTrace();
		}
	}
}
