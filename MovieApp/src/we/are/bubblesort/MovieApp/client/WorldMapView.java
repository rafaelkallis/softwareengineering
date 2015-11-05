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
	        var width;
	        var height;
	
	        var X = d3.scale.linear();
	        var Y = d3.scale.linear();

	        var svg = d3.select(map).append("svg");
	        var projection = d3.geo.mercator();
	        var path = d3.geo.path().projection(projection);
	
	        var size = function() {
	          width = map.clientWidth;
	          height = map.clientHeight;
	
	          X.domain([0,width]).range([0, width])
	          Y.domain([0,height]).range([0, height])
	
	          svg.attr("width", width).attr("height", height);
	        }
	
	        d3.select($wnd).on('resize', size);
	        size();
		    
		    var g = svg.append("g");
	
	        g.selectAll("path")
	            .data(topojson.object(topology, topology.objects.countries)
	                  .geometries)
	            .enter()
	              .append("path")
	              .attr("class", "country")
	              .attr("d", path);
	              
        	var bounds = g[0][0].getBBox(),
              scale = .9 / Math.max(bounds.width / width, bounds.height / height),
              translate = [width / 2 - scale * bounds.x - scale * (bounds.width/2), height / 2 - scale * bounds.y - scale*(bounds.height / 2)];
		
       		g.attr("transform", "translate(" + translate.join(",") + ")scale(" + scale + ")");
       		
	        zoom = d3.behavior.zoom()
	          .x(X).y(Y).translate(translate).scale(scale)
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
