package we.are.bubblesort.MovieApp.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.ui.RootPanel;

public class MovieApp implements EntryPoint {
	  QueryServiceAsync queryService = GWT.create(QueryService.class);
	  UserServiceAsync userService = GWT.create(UserService.class);
	  public static AppController controller;

	  public void onModuleLoad() {
		  AppController appViewer = new AppController(queryService, userService);
		  controller = appViewer;
		  appViewer.init(RootPanel.get());  
	  }
}
