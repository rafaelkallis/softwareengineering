package we.are.bubblesort.MovieApp.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.rpc.ServiceDefTarget;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.ui.RootPanel;

public class MovieApp implements EntryPoint {
	
  public void onModuleLoad() {
	  QueryServiceAsync queryService = GWT.create(QueryService.class);
	  ((ServiceDefTarget) queryService).setServiceEntryPoint(GWT.getModuleBaseURL() + "/Query/QueryService");
	  
	  AppController appViewer = new AppController(queryService);
	  appViewer.init(RootPanel.get());
  }
}
