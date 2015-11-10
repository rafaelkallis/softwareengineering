package we.are.bubblesort.MovieApp.client;

import com.google.gwt.event.dom.client.ChangeHandler;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.web.bindery.event.shared.HandlerRegistration;

public class FilterTextBoxView extends View implements FilterViewInterface {
	protected TextBox textBox = new TextBox();
	
	FilterTextBoxView() {
		FlowPanel panel = new FlowPanel();
		
		panel.add(this.textBox);
		this.textBox.addStyleName("form-control");
		
		initWidget(panel);
		setStyleName("filter-list-box form-group");
	}

	@Override
	public String getValue() {
		return this.textBox.getValue();
	}

	@Override
	public void setValue(String value) {
		this.textBox.setValue(value);
	}

	@Override
	public HandlerRegistration addChangeHandler(ChangeHandler handler) {
		return this.textBox.addChangeHandler(handler);
	}
}
