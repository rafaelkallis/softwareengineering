import java.util.List;
import java.util.ArrayList;
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
			List<MovieLanguage> languages,
			List<MovieCountry> countries,
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
	public List<MovieLanguage> languages;
	public List<MovieCountry> countries;
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
 * Services
 */

abstract class Service implements EventHandleable{
	protected EventBus globalEventBus;
	Service(EventBus globalEventBus){
		this.globalEventBus = globalEventBus;
		this.globalEventBus.subscribe(this);
	}
	public abstract void handleEvent(Event e);
}

class QueryService extends Service{
	QueryService(EventBus globalEventBus){
		super(globalEventBus);
	}
	public void handleEvent(Event e){
		if(e instanceof QueryEvent){
			List<Movie> movies;
			List<MovieAttribute> filters;
			
			filters = ((QueryEvent)e).filters;
			
			// lookup in database in return in movies
			movies = new ArrayList<Movie>(); 
			
			((MovieRespondable)((QueryEvent)e).source).respond(movies);
		}
	}
}

/*
 * Event
 */

interface EventHandleable{
	void handleEvent(Event e);	
}

interface Respondable<T> extends EventHandleable{
	void respond(List<T> response);
}

interface MovieRespondable extends Respondable<Movie>{
	
}

class EventBus{
	ArrayList<EventHandleable> subscriberList;
	public void subscribe(EventHandleable subscriber){
		subscriberList.add(subscriber);
	}
	public void fireEvent(Event e){
		for(EventHandleable subscriber : subscriberList){
			subscriber.handleEvent(e);
		}
	}
}

abstract class Event{
	Respondable source;
	Event(){
		// no source means no response needed
		this.source = null;
	}
	Event(Respondable source){
		this.source = source;
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

class QueryEvent extends Event{
	List<MovieAttribute> filters;
	QueryEvent(MovieRespondable source,List<MovieAttribute> filters){
		super(source);
		this.filters = filters;
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
	ActivateSectionEvent(){
		super();
	}
}

