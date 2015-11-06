package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.shared.WorldStatisticsModel;
import we.are.bubblesort.MovieApp.shared.WorldStatisticsModelEntry;

import com.google.gwt.core.client.Callback;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArray;
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
	protected WorldStatisticsModel model = new WorldStatisticsModel();
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
						update();
					}
					
				}).inject();
			}
		}).inject();
	}
	
	public void update() {
		JsArray<JavaScriptObject> json = JavaScriptObject.createArray().cast();
		
		for (WorldStatisticsModelEntry entry : this.model) {
			json.push(getStatisticsModelEntryJSObject(
					entry.iso_alpha,
					entry.n_movies.toString(),
					entry.latitude.toString(),
					entry.longitude.toString()));
		}
		
		injectMapData(this.mainPanel.getElement(), json);
	}
	
	private static native JavaScriptObject getStatisticsModelEntryJSObject(
			String 				iso_alpha,
			String 				n_movies,
			String				latitude,
			String				longitude
			)/*-{
		return {iso_alpha: iso_alpha, n_movies: n_movies, latitude: latitude, longitude: longitude};
	}-*/;

	private static native void injectMapData(Element parent, JsArray<JavaScriptObject> data) /*-{
		if (d3) {
			var numberoverlay = d3.select(parent).select("g.numberoverlay");
			
			if (!numberoverlay.size()) return;
			
	        var spotdata = numberoverlay.selectAll("g")
	          .data([]).exit().remove();
			
	        spotdata = numberoverlay.selectAll("g")
	          .data(data, function(d) { return d.iso_alpha; });
	          
	        var spot = spotdata
	        	.enter()
	            .append("g")
	            .attr("class", function(d) { return "spot spot-" + d.iso_alpha; });
	
	        spot
	            .append("circle")
	            .attr("r", 12);
	
	        spot
	          .append("text")
     		  .attr("text-anchor", "middle")
     		  .attr("y", 4)
	          .text(function(d) { return d.n_movies; })
	          .style("font-size", "12px");

	        spot.attr("transform", numberoverlay.on("transformfunctionstore"));
            spotdata.exit().remove();
		}
	}-*/;

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
	              .attr("d", path)
	              .on("mouseover", function(d) { d3.select(this).attr("class", "country active"); svg.selectAll("g.spot-" + d.id).attr("class", "spot spot-" + d.id + " active"); })
	              .on("mouseout", function(d) { d3.select(this).attr("class", "country"); svg.selectAll("g.spot-" + d.id).attr("class", "spot spot-" + d.id); });
	              
        	var bounds = g[0][0].getBBox(),
              scale = .9 / Math.max(bounds.width / width, bounds.height / height),
              translate = [width / 2 - scale * bounds.x - scale * (bounds.width/2), height / 2 - scale * bounds.y - scale*(bounds.height / 2)];
		
       		g.attr("transform", "translate(" + translate.join(",") + ")scale(" + scale + ")");
       		
       		numberoverlay = svg.append("g").attr("class", "numberoverlay");
       		
            numberoverlay.on("transformfunctionstore", transform);
            
	        zoom = d3.behavior.zoom()
	          .x(X).y(Y).translate(translate).scale(scale)
	          .on("zoom",function() {
	             g.attr("transform","translate("+ 
	                d3.event.translate.join(",")+")scale("+d3.event.scale+")");
	             
             	 numberoverlay.selectAll("g").attr("transform", transform);
	            });
	            
	        svg.call(zoom);
	                  
            function transform(d) {
            	return "translate("+X(projection([d.longitude, d.latitude])[0])+", "+Y(projection([d.longitude, d.latitude])[1])+")"
            }
	   	});
	}-*/;

	@Override
	public void setModel(WorldStatisticsModel model) {
		this.model = model;
	}
}
