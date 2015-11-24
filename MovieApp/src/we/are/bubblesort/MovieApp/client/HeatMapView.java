package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.client.resources.ClientResources;
import we.are.bubblesort.MovieApp.shared.WorldStatisticsModelEntry;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.ScriptInjector;
import com.google.gwt.dom.client.Element;
import com.google.gwt.json.client.JSONNumber;
import com.google.gwt.json.client.JSONObject;

public class HeatMapView extends MapView {
	
	HeatMapView() {
		this.mainPanel.addStyleName("mapview worldmapview heatmapview");
		initWidget(this.mainPanel);

		ScriptInjector.fromString(ClientResources.INSTANCE.d3().getText()).setWindow(ScriptInjector.TOP_WINDOW).inject();
		ScriptInjector.fromString(ClientResources.INSTANCE.topojson().getText()).setWindow(ScriptInjector.TOP_WINDOW).inject();
		String topology = ClientResources.INSTANCE.worldmap().getText();

		setupMap(this, topology, mainPanel.getElement());
		update();
	}

	protected static native void setupMap(HeatMapView instance, String jsonTopology, Element parent) /*-{
		var topology = JSON.parse(jsonTopology);
        var map = parent;
        var width, height, g, zoom;
        var d3 = $wnd.d3;
        var topojson = $wnd.topojson;

        var X = d3.scale.linear();
        var Y = d3.scale.linear();

        var svg = d3.select(map).append("svg")
        	.attr("version", 1.1)
        	.attr("xmlns", "http://www.w3.org/2000/svg");
        var projection = d3.geo.mercator();
        var path = d3.geo.path().projection(projection);
        
		var draw = function() { 
	        width = map.clientWidth;
	        height = map.clientHeight;
	        
	        if (width == 0 || height == 0) {
	        	return;
	        }
	        
			svg.selectAll("*").remove();
	
	        X.domain([0,width]).range([0, width])
	        Y.domain([0,height]).range([0, height])
	
	        svg.attr("width", width).attr("height", height);
		    
		    var g = svg.append("g");
	
	        g.selectAll("path")
	            .data(topojson.object(topology, topology.objects.countries)
	                  .geometries)
	            .enter()
	              .append("path")
	              .attr("class", "country")
	              .attr("data-code", function(d) { return d.id; })
	              .attr("d", path)
	              .on("mouseover", function(d) { d3.select(this).classed("active", true); svg.selectAll("g.spot-" + d.id).attr("class", "spot spot-" + d.id + " active"); })
	              .on("mouseout", function(d) { d3.select(this).classed("active", false); svg.selectAll("g.spot-" + d.id).attr("class", "spot spot-" + d.id); });
	              
        	var bounds = g[0][0].getBBox(),
              scale = .9 / Math.max(bounds.width / width, bounds.height / height),
              translate = [width / 2 - scale * bounds.x - scale * (bounds.width/2), height / 2 - scale * bounds.y - scale*(bounds.height / 2)];
		
       		g.attr("transform", "translate(" + translate.join(",") + ")scale(" + scale + ")");
            
	        zoom = d3.behavior.zoom()
	          .x(X).y(Y).translate(translate).scale(scale).scaleExtent([0.5, 15])
	          .on("zoom",function() {
	             g.attr("transform","translate("+ 
	                d3.event.translate.join(",")+")scale("+d3.event.scale+")");
	            });
	            
	        svg.call(zoom);
	        
    		svg.append("g").attr("class", "legend");
    	
            
			instance.@we.are.bubblesort.MovieApp.client.HeatMapView::update()();
		};
		
		setTimeout(draw, 1);
	 	d3.select($wnd).on('resize', draw);
	}-*/;
	
	protected static native void injectMapData(Element parent, JavaScriptObject data, int low, int high) /*-{
		if ($wnd.d3) {
			var d3 = $wnd.d3;
    		
    		var legendLabels = ["1–5", "6–10", "11–25", "26–100", "> 100"];
    		var domain = [5, 10, 25, 100, 500];
			var s = d3.scale.quantile()
    			.domain(domain)
    			.range(["cat-1", "cat-2", "cat-3", "cat-4", "cat-5"])	            
    			
    		var svg = d3.select(parent).select("svg");
    		var countries = svg.selectAll("path.country");
    		
			var ls_w = 20, ls_h = 20;
    		var legend = svg.selectAll("g.legend")
    			.attr("transform", "translate(10, " + (svg.attr("height") - 10) + ")");
    		
    		if (!legend.selectAll(".legendSquare").size()) {
				var legendSquare = legend.selectAll("g.legendSquare")
				    .data(domain)
				    .enter().append("g")
				    .attr("class", "legendSquare");
				
				
				legendSquare.append("path")
				  .attr("d", function(d, i) {
				  	var x = 20;
				  	var y = (-i*ls_h) - 2*ls_h;
				  	return "M20," + y + "H" + (x + ls_w) + "V" + (y + ls_h) + "H" + x + "z"; })
				  .attr("class", function(d, i) { return s(d); });
				
				legendSquare.append("text")
				  .attr("x", 50)
				  .attr("y", function(d, i){ return (-i*ls_h) - ls_h - 4;})
				  .text(function(d, i){ return legendLabels[i]; });
    		}
    		
    		var getClass = function(d) {
        		if (d.id in data) {
        			return s(data[d.id]);
        		}
        		else {
        			return "";
        		}
        	};

     		countries
	        	.attr("class", function(d) { return "country " + getClass(d); });
		}
	}-*/;

	public void update() {
		JSONObject obj = new JSONObject();

		Integer high = 1;
		Integer low = null;
		for (WorldStatisticsModelEntry entry : this.model) {
			obj.put(entry.iso_alpha, new JSONNumber(entry.n_movies));
			if (high == null || entry.n_movies > high) {
				high = entry.n_movies;
			}
			if (low == null || entry.n_movies < low) {
				low = entry.n_movies;
			}
		}
		
		if (low == null) {
			low = 0;
		}
		
		injectMapData(this.mainPanel.getElement(), obj.getJavaScriptObject(), low, high);
	}
}
