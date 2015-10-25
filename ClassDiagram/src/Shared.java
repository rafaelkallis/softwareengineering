import java.util.List;
import java.util.ArrayList;
import java.util.Set;
import java.util.HashSet;

/*
 * Entry Point & Section controlling
 */

final class AppController /*implements EntryPoint*/{
	private EventBus globalEventBus;
	
	private NavigationPresenter navigation;
	
	private List<Section> sections	= new ArrayList<Section>();
	
	public void onModuleLoad(){
		this.globalEventBus 		= new EventBus();
		
		navigation	 				= new NavigationPresenter(new NavigationView(navigation),this.globalEventBus);
		
		this.sections.add(new WorldMapSection(this.globalEventBus));
		this.sections.add(new TableSection(this.globalEventBus));
		this.sections.add(new HeatMapSection(this.globalEventBus));
		this.sections.add(new StatisticsSection(this.globalEventBus));
		this.sections.add(new AdminareaSection(this.globalEventBus));
	}
}

/*
 * Movie
 */

class Movie {
	Movie(	MovieID id,
			MovieTitle title,
			MovieYear year,
			Set<MovieLanguage> languages,
			Set<MovieCountry> countries,
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
	public Set<MovieLanguage> languages;
	public Set<MovieCountry> countries;
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

interface BusEventHandleable{
	void handleEvent(Event e);	
}

class EventBus{
	ArrayList<BusEventHandleable> subscriberList;
	public void subscribe(BusEventHandleable subscriber){
		subscriberList.add(subscriber);
	}
	public void fireEvent(Event e){
		for(BusEventHandleable subscriber : subscriberList){
			subscriber.handleEvent(e);
		}
	}
}

abstract class Event{
	Event(){
	}

}

class FilterChangedEvent extends Event{
	MovieAttribute filter;
	FilterChangedEvent(MovieAttribute filter){
		super();
		this.filter = filter;
	}
}

class FilterFlushEvent extends Event{
	FilterFlushEvent(){
		super();
	}
}

class FilterDiscardEvent extends Event{
	FilterDiscardEvent(){
		super();
	}
}

class UpdateMoviesEvent extends Event{
	List<Movie> newMovies;
	UpdateMoviesEvent(List<Movie> newMovies){
		super();
		this.newMovies = newMovies;
	}
}

class ActivateSectionEvent extends Event{
	Section section;
	ActivateSectionEvent(Section section){
		super();
		this.section = section;
	}
}

/*
 * Services
 */

abstract class Service{
	
}

class QueryService extends Service{
	
}

class UserService extends Service{
	
}

