package we.are.bubblesort.MovieApp.client;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

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
			}
		});
	}
	
	public FilterPresenter(MovieAttribute attribute, FilterViewInterface view) {
		this.view = view;
		this.attribute = attribute;
		this.isLoaded = true;
	}

	public MovieAttribute getAttribute() {
		return this.attribute;
	}

	private void readValue() {
		String currentValue = this.attribute.value;
		this.attribute.value = this.view.getValue();
		
		if (currentValue != this.attribute.value) {
			this.fireEvent(new FilterChangedEvent());
		}
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
			
			List<HashMap<String, String>> viewItems = new ArrayList<HashMap<String, String>>();
			
			for (MovieAttribute val : values) {
				HashMap<String, String> itemPair = new HashMap<String, String>();
				itemPair.put("displayName", val.displayName);
				itemPair.put("value", val.value);
				viewItems.add(itemPair);
			}
			
			selectableView.setItems(viewItems);
			
			if (this.initialValue != null) {
				this.setValue(this.initialValue);
			}
		}
	}

	private void loadValues() {
		if (this.view instanceof FilterSelectableViewInterface) {
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
