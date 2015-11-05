package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.OrderedSet;

import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ChangeHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Composite;

public class FilterPresenter extends Presenter {
	protected FilterViewInterface view;
	protected MovieAttribute attribute;
	protected QueryServiceAsync queryService;
	
	public FilterPresenter(MovieAttribute attribute, QueryServiceAsync queryService, FilterViewInterface view) {
		this.view = view;
		this.attribute = attribute;
		this.queryService = queryService;
		this.loadValues();
		
		this.view.addChangeHandler(new ChangeHandler() {
			@Override
			public void onChange(ChangeEvent event) {
				readValue();
				fireEvent(new FilterChangedEvent());
			}
		});
	}
	
	public MovieAttribute getAttribute() {
		return this.attribute;
	}

	private void readValue() {
		this.attribute.value = this.view.getValue();
	}
	
	public Object getValue() {
		return this.attribute.value;
	}
	
	private void fillViewValues(OrderedSet<MovieAttribute> values) {
		if (this.view instanceof FilterSelectableViewInterface) {
			FilterSelectableViewInterface selectableView = (FilterSelectableViewInterface)this.view;
			
			for (MovieAttribute val : values) {
				selectableView.addItem(val.displayName, val.displayName);
			}
		}
	}

	private void loadValues() {
		this.queryService.getAttributeSet(this.attribute, 0, 0, new AsyncCallback<OrderedSet<MovieAttribute>>() {

			@Override
			public void onFailure(Throwable caught) {
				Window.alert("Could not load values for attribute");
			}

			@Override
			public void onSuccess(OrderedSet<MovieAttribute> result) {
				fillViewValues(result);
			}
			
		});
	}

	@Override
	public Composite getCompositeView() {
		return (Composite)this.view;
	}

	@Override
	public View getView() {
		return (View)this.view;
	}
	
	/*
	 * attribute is used as key for hashing
	 */
	@Override
	public int hashCode(){
		return this.attribute.hashCode();
	}
	
}
