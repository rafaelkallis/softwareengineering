package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.shared.WorldStatisticsModel;
import we.are.bubblesort.MovieApp.shared.WorldStatisticsModelEntry;

import com.google.gwt.canvas.client.Canvas;
import com.google.gwt.canvas.dom.client.Context2d;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArray;
import com.google.gwt.event.dom.client.ErrorHandler;
import com.google.gwt.core.client.ScriptInjector;
import com.google.gwt.dom.client.Element;
import com.google.gwt.dom.client.ImageElement;
import com.google.gwt.event.dom.client.ErrorEvent;
import com.google.gwt.event.dom.client.LoadEvent;
import com.google.gwt.event.dom.client.LoadHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Panel;

import we.are.bubblesort.MovieApp.client.resources.ClientResources;

public class WorldMapView extends View implements MapViewInterface {
	protected WorldStatisticsModel model = new WorldStatisticsModel();
	protected Panel mainPanel = new FlowPanel();
	
	WorldMapView() {
		this.mainPanel.addStyleName("mapview worldmapview");
		initWidget(this.mainPanel);

		ScriptInjector.fromString(ClientResources.INSTANCE.d3().getText()).setWindow(ScriptInjector.TOP_WINDOW).inject();
		ScriptInjector.fromString(ClientResources.INSTANCE.topojson().getText()).setWindow(ScriptInjector.TOP_WINDOW).inject();
		String topology = ClientResources.INSTANCE.worldmap().getText();

		setupMap(this, topology, mainPanel.getElement());
		update();
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
		if ($wnd.d3) {
			var d3 = $wnd.d3;
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

	private static native void setupMap(WorldMapView instance, String jsonTopology, Element parent) /*-{
		var topology = JSON.parse(jsonTopology);
        var map = parent;
        var width, height, g, zoom, numberoverlay;
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
			svg.selectAll("*").remove();
	        width = map.clientWidth;
	        height = map.clientHeight;
	
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
            
			instance.@we.are.bubblesort.MovieApp.client.WorldMapView::update()();
		};
		
		setTimeout(draw, 1);
	 	d3.select($wnd).on('resize', draw);
	}-*/;

	@Override
	public void setModel(WorldStatisticsModel model) {
		this.model = model;
	}

	@Override
	public void startExport(ExportReadyEventHandler handler) {
		inlineStyles(this.mainPanel.getElement());
		String svgDataUri = "data:image/svg+xml;base64," + btoa(this.mainPanel.getElement().getInnerHTML());
		final Image imgRender = new Image();
		final Canvas pngCanvas = Canvas.createIfSupported();
		
		if (pngCanvas == null) {
			return;
		}
		
		this.mainPanel.add(imgRender);
		this.mainPanel.add(pngCanvas);
		imgRender.setUrl(svgDataUri);
		
		final ExportReadyEventHandler readyHandler = handler;
		
		imgRender.addLoadHandler(new LoadHandler() {
			@Override
			public void onLoad(LoadEvent event) {
				pngCanvas.setCoordinateSpaceWidth(imgRender.getWidth());
				pngCanvas.setCoordinateSpaceHeight(imgRender.getHeight());
				Context2d context = pngCanvas.getContext2d();
				context.drawImage(ImageElement.as(imgRender.getElement()), 0, 0);
				String pngDataUri = pngCanvas.toDataUrl("image/png");

				readyHandler.onExportReady(pngDataUri);
				
				cleanUpExport(imgRender, pngCanvas);
			}
		});
		
		imgRender.addErrorHandler(new ErrorHandler() {
			@Override
			public void onError(ErrorEvent event) {
				Window.alert("Export fehlgeschlagen.");
				cleanUpExport(imgRender, pngCanvas);
			}
		});
	}
	
	private void cleanUpExport(Image imgRender, Canvas pngCanvas) {
		imgRender.removeFromParent();
		pngCanvas.removeFromParent();
	}
	
	native void inlineStyles(Element parent) /*-{
		function computedToInline(element, recursive) {
			if (recursive) {
				Array.prototype.forEach.call(element.children, function(child) {
				computedToInline(child, recursive);
				});
			}
			
			var computedStyle = getComputedStyle(element, null);
			for (var i = 0; i < computedStyle.length; i++) {
				var property = computedStyle.item(i);
				var value = computedStyle.getPropertyValue(property);
				element.style[property] = value;
			}
		}
		
		computedToInline(parent.firstChild, true);
	}-*/;
	
	native String btoa(String source) /*-{
	    return btoa(unescape(encodeURIComponent(source)));
	}-*/;
}
