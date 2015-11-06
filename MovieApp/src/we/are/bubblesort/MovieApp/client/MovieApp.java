package we.are.bubblesort.MovieApp.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;

import com.google.gwt.user.client.ui.RootPanel;

public class MovieApp implements EntryPoint {
	  QueryServiceAsync queryService = GWT.create(QueryService.class);

  public void onModuleLoad() {
	  
	  AppController appViewer = new AppController(queryService);
	  appViewer.init(RootPanel.get());  
  }
}
