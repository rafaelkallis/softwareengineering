package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.MovieAttribute;

import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ChangeHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Composite;

public class FilterPresenter extends Presenter {
	protected FilterViewInterface view;
	protected MovieAttribute attribute;
	protected QueryServiceAsync queryService;
	protected String initialValue;
	protected Boolean isLoaded = false;
	
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
	
	public void setValue(String value) {
		if (this.isLoaded) {
			this.view.setValue(value);
			this.readValue();
			this.fireEvent(new FilterChangedEvent());
		}
		else {
			this.initialValue = value;
		}
	}
	
	private void fillViewValues(Collection<MovieAttribute> values) {
		if (this.view instanceof FilterSelectableViewInterface) {
			FilterSelectableViewInterface selectableView = (FilterSelectableViewInterface)this.view;
			
			for (MovieAttribute val : values) {
				selectableView.addItem(val.displayName, val.displayName);
			}
			
			if (this.initialValue != null) {
				this.setValue(this.initialValue);
			}
		}
	}

	private void loadValues() {
		this.queryService.getAttributeCollection(this.attribute, 0, 0, new AsyncCallback<Collection<MovieAttribute>>() {

			@Override
			public void onFailure(Throwable caught) {
				Window.alert("Could not load values for attribute");
			}

			@Override
			public void onSuccess(Collection<MovieAttribute> result) {
				isLoaded = true;
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
