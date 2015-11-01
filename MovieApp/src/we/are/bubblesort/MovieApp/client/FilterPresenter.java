package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.Keyable;
import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.MovieAttributeValue;

import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ChangeHandler;
import com.google.gwt.user.client.ui.Composite;

public class FilterPresenter extends Presenter implements Keyable {
	protected FilterViewInterface view;
	protected MovieAttribute attribute;
	protected QueryServiceAsync queryService;
	
	public FilterPresenter(MovieAttribute attribute, QueryServiceAsync queryService, FilterViewInterface view) {
		this.view = view;
		this.attribute = attribute;
		this.queryService = queryService;
		this.fillViewValues();
		
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
	
	private void fillViewValues() {
		if (this.view instanceof FilterSelectableViewInterface) {
			FilterSelectableViewInterface seletableView = (FilterSelectableViewInterface)this.view;
			Collection<MovieAttributeValue> values = this.getFilterValues();
			
			for (MovieAttributeValue val : values) {
				seletableView.addItem(val.getDisplayName(), val.getValue());
			}
		}
	}

	private Collection<MovieAttributeValue> getFilterValues() {
		// MOCK until Services work
		Collection<MovieAttributeValue> values = new Collection<MovieAttributeValue>();
		values.add(new MovieAttributeValue("1995"));
		values.add(new MovieAttributeValue("1996"));
		values.add(new MovieAttributeValue("1997"));
		values.add(new MovieAttributeValue("1998"));
		values.add(new MovieAttributeValue("1999"));
		values.add(new MovieAttributeValue("2000"));
		values.add(new MovieAttributeValue("2001"));
		values.add(new MovieAttributeValue("2002"));
		values.add(new MovieAttributeValue("2003"));
		values.add(new MovieAttributeValue("2004"));
		
		return values;
	}

	@Override
	public Composite getCompositeView() {
		return (Composite)this.view;
	}

	@Override
	public View getView() {
		return (View)this.view;
	}

	@Override
	public Object getKey() {
		return this.attribute;
	}
}
