package we.are.bubblesort.MovieApp.client;

import java.util.HashMap;
import java.util.List;

import we.are.bubblesort.MovieApp.client.resources.ClientResources;

import com.google.gwt.core.client.JsArrayInteger;
import com.google.gwt.core.client.ScriptInjector;
import com.google.gwt.dom.client.Document;
import com.google.gwt.dom.client.Element;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ChangeHandler;
import com.google.gwt.event.dom.client.DomEvent;
import com.google.gwt.event.dom.client.HasChangeHandlers;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.Panel;

public class RangeSliderView extends View implements FilterSelectableViewInterface, HasChangeHandlers {
	protected Panel mainPanel;
	protected String currentValue = "";
	protected Boolean libLoaded = false;
	private JsArrayInteger values = JsArrayInteger.createArray().cast();
	
	RangeSliderView() {
		this.mainPanel = new FlowPanel();
		initWidget(this.mainPanel);
		this.mainPanel.addStyleName("range-slider-view");
		
		final RangeSliderView instance = this;

		ScriptInjector.fromString(ClientResources.INSTANCE.d3().getText()).setWindow(ScriptInjector.TOP_WINDOW).inject();

		libLoaded = true;
		display(mainPanel.getElement(), values, instance);
	}
	
	private static native void display(Element parent, JsArrayInteger values, RangeSliderView instance) /*-{
		if (values.length == 0) return;
		var margin = {top: 0, right: 25, bottom: 0, left: 25},
		    width = Math.max(parent.clientWidth, 100) - margin.right - margin.left,
		    height = Math.max(parent.clientHeight, 50) - margin.top - margin.bottom;
		var d3 = $wnd.d3;
		var x = d3.scale.linear()
			.range([0, width])
		    .clamp(true);
		    
		var parentEl = d3.select(parent);
		parentEl.select("svg").remove();
		var svg = parentEl.append("svg")
		    .attr("class", "rangeslider")
		    .attr("width", width + margin.left + margin.right)
		    .attr("height", height + margin.top + margin.bottom)
		  .append("g")
		    .attr("class", "axis");
	
		var brush = d3.svg.brush()
		    .x(x)
		    .on("brushstart", start)
		    .on("brush", move)
		    .on("brushend", setvalue);
		
		var data = values.sort();
		var range = [Math.floor(data[0] / 10) * 10, Math.ceil(data[data.length - 1] / 10) * 10];
		x.domain(range);

		svg.attr("transform", "translate(" + (margin.left) + "," + (height / 2 + margin.top - 5) + ")");
		
		svg.append("g")
		    .attr("class", "decades")
		    .call(d3.svg.axis()
		      .scale(x)
		      .orient("bottom")
		      .tickSize(0)
		      .tickFormat(function(d) { return d; })
		      .tickValues(d3.range(range[0], range[1] + 1, 10))
		      .tickPadding(25))
		
		svg.append("g")
		    .attr("class", "tick-decades tick")
		    .call(d3.svg.axis()
		      .scale(x)
		      .orient("bottom")
		      .tickSize(15)
		      .tickFormat("")
		      .tickValues(d3.range(range[0], range[1] + 1, 10)))
		
		svg.append("g")
		    .attr("class", "tick-years tick")
		    .call(d3.svg.axis()
		      .scale(x)
		      .orient("bottom")
		      .tickSize(8)
		      .tickFormat("")
		      .tickValues(d3.range(range[0], range[1], 1)))
		
		svg.append("g")
		    .attr("class", "tick-5years tick")
		    .call(d3.svg.axis()
		      .scale(x)
		      .orient("bottom")
		      .tickSize(10)
		      .tickFormat("")
		      .tickValues(d3.range(range[0], range[1] + 1, 5)))
		
		var slider = svg.append("g")
		    .attr("class", "slider")
		    .call(brush);
		    
		    
		slider.on("brushstore", brush);
		
		slider.selectAll(".extent").remove();
		slider.selectAll(".resize").remove();
		
		var bg = slider.select(".background")
		    .attr("width", width)
		    .attr("height", height + margin.top + margin.bottom)
		    .attr("transform", "translate(0, " + (-(margin.top + height / 2)) + ")")
		    
		var handle = slider.append("g")
		
		handle.append("circle")
		    .attr("class", "handle")
		    .attr("r", 5);
		
		var label = handle.append("text")
		  .attr("class", "currentyear")
		  .attr("y", "-15")
		  .attr("font-size", "20px")
		  .attr("text-anchor", "middle")
		  
	    slider.call(slider.on("brushstore").event)
		
		function start() {
		  svg.classed("brushing", true);
		}
		
		function end() {
		  svg.classed("brushing", false);
		}
		
		function move() {
		  var value = brush.extent()[0];
		
		  if (d3.event.sourceEvent) {
		    value = Math.round(x.invert(d3.mouse(this)[0]));
		    brush.extent([value, value]);
		  }

		  handle.attr("transform", "translate(" + x(value) + ",0)");
		  label.text(parseInt(value));
		}
		
		function setvalue() {
		  var value = brush.extent()[0];
		  instance.@we.are.bubblesort.MovieApp.client.RangeSliderView::currentValue = "" + value;
		  instance.@we.are.bubblesort.MovieApp.client.RangeSliderView::fireChangeEvent()();
		  end();
		}
	}-*/;
	
	private static native void setSlider(Element parent, Integer value) /*-{
		var d3 = $wnd.d3;
		var slider = d3.select(parent).select("g.slider");
		slider
		  .call(slider.on("brushstore").event)
		  .transition()
		    .duration(750)
		    .call(slider.on("brushstore").extent([value, value]))
		    .call(slider.on("brushstore").event);
		
	}-*/;

	@Override
	public void setItems(List<HashMap<String, String>> items) {
		this.values = toValueArray(items);
		
		if (this.libLoaded) {
			display(this.mainPanel.getElement(), toValueArray(items), this);
		}
	}
	
	public static JsArrayInteger toValueArray(List<HashMap<String, String>> items) {
		JsArrayInteger valueArray = JsArrayInteger.createArray().cast();
		
	    for (HashMap<String, String> itemPair : items) {
	    	valueArray.push(Integer.parseInt(itemPair.get("value")));
	    }
	    return valueArray;
	}
	
	@Override
	public String getValue() {
		return this.currentValue;
	}

	@Override
	public void setValue(String value) {
		this.currentValue = value;
		if (libLoaded) {
			setSlider(this.mainPanel.getElement(), Integer.parseInt(value));
		}
	}
	
	protected void fireChangeEvent() {
		DomEvent.fireNativeEvent(Document.get().createChangeEvent(), this.getWidget());
	}

	@Override
	public com.google.gwt.event.shared.HandlerRegistration addChangeHandler(
			ChangeHandler handler) {
		this.getWidget().addDomHandler(handler, ChangeEvent.getType());
		return null;
	}
}
