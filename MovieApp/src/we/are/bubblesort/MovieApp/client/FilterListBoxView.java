package we.are.bubblesort.MovieApp.client;

import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ChangeHandler;
import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.ui.ListBox;

public class FilterListBoxView extends View implements FilterSelectableViewInterface {
	protected ListBox listBox = new ListBox();

	@Override
	public HandlerRegistration addChangeHandler(ChangeHandler handler) {
		return (HandlerRegistration) this.addHandler(ChangeEvent.getType(), handler);
	}

	@Override
	public void addItem(String displayName, String value) {
		this.listBox.addItem(displayName, value);
	}

	@Override
	public String getValue() {
		return this.listBox.getSelectedValue();
	}

}
