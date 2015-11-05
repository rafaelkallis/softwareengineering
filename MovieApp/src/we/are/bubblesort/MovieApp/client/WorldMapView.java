package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.shared.WorldStatModel;

import com.google.gwt.core.client.Callback;
import com.google.gwt.core.client.ScriptInjector;
import com.google.gwt.dom.client.Element;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.Panel;

/*
 * requires the following libraries provided:
 * d3.min.js, topojson.v0.min.js
 */

public class WorldMapView extends View implements MapViewInterface {
	protected WorldStatModel model = new WorldStatModel();
	final static String topologyUrl = "js/ne_110m_admin_0_countries_wo_antarctica.json";
	final static String d3LibUrl = "js/d3.v3.min.js";
	final static String topoLibUrl = "js/topojson.v0.min.js";
	protected Panel mainPanel = new FlowPanel();
	
	WorldMapView() {
		this.mainPanel.addStyleName("mapview worldmapview");
		initWidget(this.mainPanel);
		
		ScriptInjector.fromUrl(d3LibUrl).setCallback(new Callback<Void, Exception>() {
			public void onFailure(Exception reason) {
				Window.alert("Script d3 load failed.");
			}
			public void onSuccess(Void result) {
				ScriptInjector.fromUrl(topoLibUrl).setCallback(new Callback<Void, Exception>() {

					@Override
					public void onFailure(Exception reason) {
						Window.alert("Script topojson load failed.");
					}

					@Override
					public void onSuccess(Void result) {
						setupMap(topologyUrl, mainPanel.getElement());
					}
					
				}).inject();
			}
		}).inject();
	}

	private static native void setupMap(String topologyUrl, Element parent) /*-{
		d3.json(topologyUrl, function(topology) {
	        var map = parent;
	        var width = map.clientWidth;
	        var height = map.clientHeight;
	
	        var X = d3.scale.linear()
	            .domain([0,width])
	            .range([0, width])
	        var Y = d3.scale.linear()
	            .domain([0,height])
	            .range([0, height])
	
	        var projection = d3.geo.mercator();
	
	        window.projection = projection;
	        
	        var svg = d3.select(map).append("svg")
	            .attr("width", width)
	            .attr("height", height);
	
	        var path = d3.geo.path()
	            .projection(projection);
	
	        var g = svg.append("g");
	
	        var layer = svg.append("g");
	
	        g.selectAll("path")
	            .data(topojson.object(topology, topology.objects.countries)
	                  .geometries)
	            .enter()
	              .append("path")
	              .attr("class", "country")
	              .attr("d", path);
	
	        zoom = d3.behavior.zoom()
	          .x(X).y(Y)
	          .on("zoom",function() {
	             g.attr("transform","translate("+ 
	                d3.event.translate.join(",")+")scale("+d3.event.scale+")");
	            });
	
	        svg.call(zoom);
	   	});
	}-*/;

	@Override
	public void setModel(WorldStatModel model) {
		this.model = model;

	}
}
