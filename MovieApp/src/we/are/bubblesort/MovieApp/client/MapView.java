package we.are.bubblesort.MovieApp.client;

import com.google.gwt.canvas.client.Canvas;
import com.google.gwt.canvas.dom.client.Context2d;
import com.google.gwt.dom.client.Element;
import com.google.gwt.dom.client.ImageElement;
import com.google.gwt.event.dom.client.ErrorEvent;
import com.google.gwt.event.dom.client.ErrorHandler;
import com.google.gwt.event.dom.client.LoadEvent;
import com.google.gwt.event.dom.client.LoadHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Panel;

import we.are.bubblesort.MovieApp.shared.WorldStatisticsModel;

public abstract class MapView extends View implements ExportableInterface {
	protected WorldStatisticsModel model = new WorldStatisticsModel();
	protected Panel mainPanel = new FlowPanel();
	
	abstract void update();

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
	
	protected void cleanUpExport(Image imgRender, Canvas pngCanvas) {
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
