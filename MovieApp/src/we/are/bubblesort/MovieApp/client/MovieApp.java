package we.are.bubblesort.MovieApp.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.ServiceDefTarget;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.RootPanel;

public class MovieApp implements EntryPoint {
	
  public void onModuleLoad() {
	  QueryServiceAsync queryService = GWT.create(QueryService.class);
	  ((ServiceDefTarget) queryService).setServiceEntryPoint(GWT.getModuleBaseURL() + "/query/QueryService");
	  
	  AppController appViewer = new AppController(queryService);
	  appViewer.init(RootPanel.get());
	  
	  Button dbTestButton = new Button("Test DB Call");
		dbTestButton.addStyleName("TEST-UI");
		dbTestButton.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				// do some shit and log it out
				Window.alert("DB TEST!");
			}
		});
	  RootPanel.get().add(dbTestButton);
  }
}
