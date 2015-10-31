package we.are.bubblesort.MovieApp.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.RootPanel;

public class MovieApp implements EntryPoint {
	
  public void onModuleLoad() {
	  QueryServiceAsync rpcService = GWT.create(QueryService.class);
	  AppController appViewer = new AppController(rpcService);
	  appViewer.init(RootPanel.get());

	  RootPanel.get().add(new HTML("<p>HEllo</p>"));
  }
}
