package we.are.bubblesort.MovieApp.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.RootPanel;
import we.are.bubblesort.MovieApp.shared.*;

public class MovieApp implements EntryPoint {
	  QueryServiceAsync queryService = GWT.create(QueryService.class);

  public void onModuleLoad() {
	  
	  AppController appViewer = new AppController(queryService);
	  appViewer.init(RootPanel.get());
	  
	  Button dbTestButton = new Button("Test DB Call");
		dbTestButton.addStyleName("TEST-UI");
		dbTestButton.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				// do some shit and log it out
				filter_test();
			}
		});
	  RootPanel.get().add(dbTestButton);
  }
  public void filter_test(){
	  queryService.getAttributeSet(new MovieYear(1994,"1994"),1,0, new AsyncCallback<OrderedSet<MovieAttribute>>(){
		  public void onSuccess(OrderedSet<MovieAttribute> result){
			  for(MovieAttribute atr : result){
				  Window.alert("Returned: "+atr.value);
			  }
			  
		  }
		  public void onFailure(Throwable e){
			  Window.alert(":(");
		  }
	  });
  }
}
