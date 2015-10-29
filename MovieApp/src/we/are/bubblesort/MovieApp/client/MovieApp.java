package we.are.bubblesort.MovieApp.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.ui.RootPanel;

import we.are.bubblesort.MovieApp.shared.EventBus;

public class MovieApp implements EntryPoint {
	
  public void onModuleLoad() {
	  QueryServiceAsync rpcService = GWT.create(QueryService.class);
	  EventBus eventBus = new EventBus();
	  AppController appViewer = new AppController(rpcService, eventBus);
	  appViewer.init(RootPanel.get());
  }
}
