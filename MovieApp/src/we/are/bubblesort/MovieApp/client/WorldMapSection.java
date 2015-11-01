package we.are.bubblesort.MovieApp.client;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.web.bindery.event.shared.SimpleEventBus;

import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.Movie;
import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.Set;

import com.google.gwt.user.client.ui.Panel;


public class WorldMapSection extends Section {
	static final String defaultName = "Karte";
	QueryServiceAsync queryService;
	
	WorldMapSection(String sectionName, Boolean showInMainMenu, SimpleEventBus globalEventBus, QueryServiceAsync queryService) {
		super(sectionName, showInMainMenu, globalEventBus);
		this.queryService = queryService;
	}
	
	WorldMapSection(Boolean showInMainMenu, SimpleEventBus globalEventBus, QueryServiceAsync queryService) {
		this(defaultName, showInMainMenu, globalEventBus, queryService);
	}

	@Override
	void init() {
		this.mainPanel = new FlowPanel();
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
