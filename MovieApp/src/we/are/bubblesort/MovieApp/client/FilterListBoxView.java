package we.are.bubblesort.MovieApp.client;

import java.util.HashMap;
import java.util.List;

import com.google.gwt.dom.client.Document;
import com.google.gwt.event.dom.client.ChangeHandler;
import com.google.gwt.event.dom.client.DomEvent;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.ListBox;
import com.google.web.bindery.event.shared.HandlerRegistration;

public class FilterListBoxView extends View implements FilterSelectableViewInterface {
	protected ListBox listBox = new ListBox();
	protected HashMap<String, Integer> indexByValue = new HashMap<String, Integer>();
	
	FilterListBoxView() {
		FlowPanel panel = new FlowPanel();
		
		panel.add(this.listBox);
		this.listBox.addStyleName("form-control");
		
		initWidget(panel);
		setStyleName("filter-list-box form-group");
	}

	@Override
	public HandlerRegistration addChangeHandler(ChangeHandler handler) {
		return this.listBox.addChangeHandler(handler);
	}
	
	@Override
	public void setItems(List<HashMap<String, String>> items) {
		this.clearItems();
		
		this.listBox.addItem("Alle", "");
		this.indexByValue.put("", 0);
		this.listBox.setSelectedIndex(0);
		
		int i = 1;
		for (HashMap<String, String> itemPair : items) {
			this.listBox.addItem(itemPair.get("displayName"), itemPair.get("value"));
			this.indexByValue.put(itemPair.get("value"), i);
			i++;
		}
		
		DomEvent.fireNativeEvent(Document.get().createChangeEvent(), this.listBox);
	}
	
	protected void clearItems() {
		this.indexByValue.clear();
		this.listBox.clear();
	}

	@Override
	public String getValue() {
		return this.listBox.getSelectedValue();
	}

	@Override
	public void setValue(String value) {
		if (indexByValue.containsKey(value)) {
			Integer ix = indexByValue.get(value);
			
			if (ix < this.listBox.getItemCount()) {
				this.listBox.setSelectedIndex(ix);
			}
		}
	}
}
