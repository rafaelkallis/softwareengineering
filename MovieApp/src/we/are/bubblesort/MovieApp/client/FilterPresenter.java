package we.are.bubblesort.MovieApp.client;

import we.are.bubblesort.MovieApp.shared.Collection;
import we.are.bubblesort.MovieApp.shared.MovieAttribute;
import we.are.bubblesort.MovieApp.shared.MovieYear;

import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ChangeHandler;
import com.google.gwt.user.client.ui.Composite;

public class FilterPresenter extends Presenter {
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
			Collection<MovieAttribute> values = this.getFilterValues();
			
			for (MovieAttribute val : values) {
				seletableView.addItem(val.displayName, val.displayName);
			}
		}
	}

	private Collection<MovieAttribute> getFilterValues() {
		// MOCK until Services work
		Collection<MovieAttribute> values = new Collection<MovieAttribute>();
		values.add(new MovieYear("1995"));
		values.add(new MovieYear("1996"));
		values.add(new MovieYear("1997"));
		values.add(new MovieYear("1998"));
		values.add(new MovieYear("1999"));
		values.add(new MovieYear("2000"));
		values.add(new MovieYear("2001"));
		values.add(new MovieYear("2002"));
		values.add(new MovieYear("2003"));
		values.add(new MovieYear("2004"));
		
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
	
	/*
	 * attribute is used as key for hashing
	 */
	@Override
	public int hashCode(){
		return this.attribute.hashCode();
	}
	
}
