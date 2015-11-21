package we.are.bubblesort.MovieApp.client.resources;

import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.TextResource;


public interface ClientResources extends ClientBundle {
	public static final ClientResources INSTANCE = GWT.create(ClientResources.class);
	
	@Source("we/are/bubblesort/MovieApp/client/resources/bootstrap.min.js")
	TextResource bootstrap();

	@Source("we/are/bubblesort/MovieApp/client/resources/jquery.2.1.4.min.js")
	TextResource jquery();

	@Source("we/are/bubblesort/MovieApp/client/resources/d3.v3.min.js")
	TextResource d3();

	@Source("we/are/bubblesort/MovieApp/client/resources/topojson.v0.min.js")
	TextResource topojson();

	@Source("we/are/bubblesort/MovieApp/client/resources/ne_110m_admin_0_countries_wo_antarctica.json")
	TextResource worldmap();

}
