package we.are.bubblesort.MovieApp.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;

import com.google.gwt.user.client.ui.RootPanel;

public class MovieApp implements EntryPoint {
	  QueryServiceAsync queryService = GWT.create(QueryService.class);
	  public static AppController controller;

	  public void onModuleLoad() {
		  AppController appViewer = new AppController(queryService);
		  controller = appViewer;
		  appViewer.init(RootPanel.get());  
	  }
}
