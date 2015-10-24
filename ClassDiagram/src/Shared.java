import java.util.LinkedList;
/*
 * Bootstrapping & Section controlling
 */

final class AppController{
	private Object globalEventBus;
	
	private NavigationView 		navigationView;
	private NavigationPresenter navigationPresenter;
	
	void onModuleLoad(){
		//create sections
	}
}

/*
 * Movie
 */
class Movie {
	Movie(	MovieID id,
			MovieTitle title,
			MovieYear year,
			MovieLanguage[] languages,
			MovieCountry[] countries,
			MovieDuration duration){
		this.id = id;
		this.title= title;
		this.year = year;
		this.languages = languages;
		this.countries = countries;
		this.duration = duration;
	}

	public MovieID id;
	public MovieTitle title;
	public MovieYear year;
	public MovieLanguage[] languages;
	public MovieCountry[] countries;
	public MovieDuration duration;
}

abstract class MovieAttribute {
	public Object value;
	MovieAttribute(Object value){
		this.value = value;
	}
}

class MovieTitle extends MovieAttribute {
	MovieTitle(String value){
		super(value);
	}
}

class MovieYear extends MovieAttribute {
	MovieYear(Integer value){
		super(value);
	}
}

class MovieLanguage extends MovieAttribute {
	MovieLanguage(Integer value){
		super(value);
	}
}

class MovieCountry extends MovieAttribute {
	MovieCountry(String value){
		super(value);
	}
}

//class MovieRating extends MovieAttribute {}

class MovieDuration extends MovieAttribute {
	MovieDuration(Integer value){
		super(value);
	}
}

class MovieID extends MovieAttribute {
	MovieID(Integer value){
		super(value);
	}
}

/*
 * Import / Export
 */

class ImportRequest{
	
}
class ImportResponse{
	
}
class ExportRequest{
	
}
class ExportResponse{
}

/*
 * Users
 */

class User{
	protected int user_id;
}
class Adminuser extends User{
	
}

/*
 * Event
 */

interface EventHandleable{
	void handleEvent(Event e);
}

class EventBus{
	LinkedList<EventHandleable> componentList;
	public void bind(EventHandleable component){
		componentList.add(component);
	}
	public void fireEvent(Event e){
		for(EventHandleable component : componentList){
			component.handleEvent(e);
		}
	}
}

abstract class Event{
	EventHandleable source;
	Event(){
		// no source means source cannot handle fired events
		this.source = null;
	}
	Event(EventHandleable source){
		this.source = source;
	}
}

class FilterChangedEvent extends Event{
	FilterCollection filters;
}

class ActivateSectionEvent extends Event{
	
}

/*
 * Miscallaneous
 */

