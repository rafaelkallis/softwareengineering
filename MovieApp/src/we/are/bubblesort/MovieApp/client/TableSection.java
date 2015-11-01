package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.HTML;

import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.Movie;
import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.Set;

public class TableSection extends Section {
	static final String defaultName = "Tabelle";
	private QueryServiceAsync queryService;
	
	TableSection(String sectionName, QueryServiceAsync queryService) {
		super(sectionName);
		this.queryService = queryService;
	}
	
	TableSection(QueryServiceAsync queryService) {
		this(defaultName, queryService);
	}

	@Override
	void init() {
		this.mainPanel = new FlowPanel();
		this.mainPanel.add(new HTML("<h1>TableSection</h1>"));
		this.setPanelIdentifier("table");
	}
	public void callQueryService(Set<MovieAttribute> filterSet){
		queryService.getMovieCollection(filterSet, new AsyncCallback<Collection<Movie>>(){
			public void onFailure(Throwable caught){
				/*
				 * handle Failure
				 */
			}
			public void onSuccess(Collection<Movie> result){
				/*
				 * to something with result
				 */
			}
		});
	}
}
