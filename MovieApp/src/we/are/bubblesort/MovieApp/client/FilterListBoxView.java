package we.are.bubblesort.MovieApp.client;

import java.util.HashMap;

import com.google.gwt.event.dom.client.ChangeHandler;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.ListBox;
import com.google.web.bindery.event.shared.HandlerRegistration;

public class FilterListBoxView extends View implements FilterSelectableViewInterface {
	protected ListBox listBox = new ListBox();
	protected HashMap<String, Integer> indexByValue = new HashMap<String, Integer>();
	
	FilterListBoxView() {
		FlowPanel panel = new FlowPanel();
		
		panel.add(this.listBox);
		
		initWidget(panel);
		setStyleName("filter-list-box");
	}

	@Override
	public HandlerRegistration addChangeHandler(ChangeHandler handler) {
		return this.listBox.addChangeHandler(handler);
	}

	@Override
	public void addItem(String displayName, String value) {
		this.listBox.addItem(displayName, value);
		this.indexByValue.put(value, this.listBox.getItemCount() - 1);
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
