import java.util.List;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
/*
 * Section
 */

/*
 * Dependencies:
 * 	GlobalEventBus
 */
public abstract class Section implements EventHandleable{
	protected EventBus sectionEventBus;
	protected EventBus globalEventBus;
	
	Section(EventBus globalEventBus){
		this.sectionEventBus 	= new EventBus();
		this.globalEventBus 	= globalEventBus;
	}
	//used as a router from internal(sectionEventBus) to external(globalEventBus) communication and vice-versa 
	//e.g new query
	public abstract void handleEvent(Event e);
	
	//actions taken when section is being activated
	abstract void activateSection();
}

final class WorldMapSection extends Section{
	
	private WorldMapPresenter			worldMap;
	private GenreFilterPresenter		genreFilter;
	private YearFilterPresenter			yearFilter;
	private LanguageFilterPresenter 	languageFilter;
	private CountryFilterPresenter 		countryFilter;
	
	WorldMapSection(EventBus globalEventBus){
		super(globalEventBus);
		
		this.worldMap			 		= new WorldMapPresenter			(new WorldMapView(),this.sectionEventBus);
		this.genreFilter				= new GenreFilterPresenter		(new GenreFilterView(),this.sectionEventBus);
		this.yearFilter 				= new YearFilterPresenter		(new YearFilterView(),this.sectionEventBus);
		this.languageFilter 			= new LanguageFilterPresenter	(new LanguageFilterView(),this.sectionEventBus);
		this.countryFilter 				= new CountryFilterPresenter	(new CountryFilterView(),this.sectionEventBus);
	}
	public void handleEvent(Event e){
		//TODO: handle event
	}
	void activateSection(){
		// Nothing To do
	}
}
final class TableSection extends Section{
	
	private TablePresenter				table;
	private GenreFilterPresenter		genreFilter;
	private YearFilterPresenter			yearFilter;
	private LanguageFilterPresenter		languageFilter;
	private CountryFilterPresenter 		countryFilter;
	private SearchBoxFilterPresenter 	searchBox;
	
	TableSection(EventBus globalEventBus){
		super(globalEventBus);
		
		this.table						= new TablePresenter			(new TableView(),this.sectionEventBus);
		this.genreFilter				= new GenreFilterPresenter		(new GenreFilterView(),this.sectionEventBus);
		this.countryFilter				= new CountryFilterPresenter	(new CountryFilterView(),this.sectionEventBus);
		this.languageFilter				= new LanguageFilterPresenter	(new LanguageFilterView(),this.sectionEventBus);
		this.yearFilter					= new YearFilterPresenter		(new YearFilterView(),this.sectionEventBus);
		this.searchBox					= new SearchBoxFilterPresenter	(new SearchBoxFilterView(),this.sectionEventBus);
	}
	public void handleEvent(Event e){
		//TODO: handle event
	}
	void activateSection(){
		// Nothing To do
	}
}
final class HeatMapSection extends Section{
	
	private HeatMapPresenter 			heatMap;
	private GenreFilterPresenter 		genreFilter;
	private YearFilterPresenter 		yearFilter;
	private LanguageFilterPresenter 	languageFilter;
	private CountryFilterPresenter 		countryFilter;
	
	HeatMapSection(EventBus globalEventBus){
		super(globalEventBus);
		
		this.heatMap					= new HeatMapPresenter			(new HeatMapView(),this.sectionEventBus);
		this.genreFilter	 			= new GenreFilterPresenter		(new GenreFilterView(),this.sectionEventBus);
		this.countryFilter				= new CountryFilterPresenter	(new CountryFilterView(),this.sectionEventBus);
		this.languageFilter 			= new LanguageFilterPresenter	(new LanguageFilterView(),this.sectionEventBus);
		this.yearFilter					= new YearFilterPresenter		(new YearFilterView(),this.sectionEventBus);
	}
	public void handleEvent(Event e){
		//TODO: handle event
	}
	void activateSection(){
		// Nothing To do
	}
}

final class StatisticsSection extends Section{
	
	private StatisticsPresenter statistics;
	
	StatisticsSection(EventBus globalEventBus){
		super(globalEventBus);
		
		this.statistics 				= new StatisticsPresenter		(new StatisticsView(),this.sectionEventBus);
	}
	public void handleEvent(Event e){
		//TODO: handle event
	}
	void activateSection(){
		// Nothing To do
	}
}

final class AdminareaSection extends Section{
	AdminareaSection(EventBus globalEventBus){
		super(globalEventBus);
	}
	public void handleEvent(Event e){
		//TODO: handle event
	}
	void activateSection(){
		// Nothing To do

	}
}

// Can only fire section events
abstract class SectionObject{
	EventBus sectionEventBus;
	SectionObject(EventBus sectionEventBus){
		this.sectionEventBus = sectionEventBus;
	}
}

// Can fire & handle section events
abstract class HandleableSectionObject extends SectionObject implements EventHandleable{
	HandleableSectionObject(EventBus sectionEventBus){
		super(sectionEventBus);
		this.sectionEventBus.subscribe(this);
	}
	public abstract void handleEvent(Event e);
}

/*
 * Views
 */

abstract class View{
	View(){
		
	}
}



abstract class FilterView extends View{
	FilterView( ){
		super();
	}
}

class RangeSliderFilterView extends FilterView {
	RangeSliderFilterView( ){
		super();
	}
}
/*class SelectListFilterView extends FilterView {
	SelectListFilterView( ){
		super();
	}
}*/
interface SelectListable{
	
}

interface Sliderable extends SelectListable{
	
}

interface Typeable{
	
}


class GenreFilterView extends FilterView implements SelectListable{
	GenreFilterView(){
		super();
	}
}

class YearFilterView extends FilterView implements SelectListable{
	YearFilterView(){
		super();
	}
}

class SliderYearFilterView extends YearFilterView implements Sliderable{
	SliderYearFilterView(){
		super();
	}
}

class LanguageFilterView extends FilterView implements SelectListable{
	LanguageFilterView(){
		super();
	}
}

class CountryFilterView extends FilterView implements SelectListable{
	CountryFilterView(){
		super();
	}
}

class SearchBoxFilterView extends FilterView implements Typeable{
	 SearchBoxFilterView( ){
		super();
	 }
}

abstract class ChartView extends View{
	ChartView( ){
		super();
	}
}

class PieChartView extends ChartView {
	PieChartView( ){
		super();
	}
}

class BarChartView extends ChartView {
	BarChartView( ){
		super();
	}
}

class ImportView extends View{
	ImportView( ){
		super();
	}
}

class AdvertismentView extends View{
	AdvertismentView( ){
	}
}
class NavigationView extends View{
	NavigationView( ){
		super();
	}
}

class WorldMapView extends View{
	WorldMapView( ){
		super();
	}
}

class TableView extends View{
	TableView( ){
		super();
	}
}
class HeatMapView extends View{
	HeatMapView( ){
		super();
	}
}
class StatisticsView extends View{
	StatisticsView( ){
		super();
	}
}
class AdminareaView extends View{
	AdminareaView( ){
		super();
	}
}

/*
 * Presenter
 */

//can only fire events
abstract class Presenter extends SectionObject{
	View view;
	Presenter(View view,EventBus sectionEventBus){
		super(sectionEventBus);
		this.view = view;
	}
}

//can fire & handle events
abstract class HandleablePresenter extends HandleableSectionObject{
	View view;
	HandleablePresenter(View view, EventBus sectionEventBus){
		super(sectionEventBus);
		this.view = view;
	}
	public abstract void handleEvent(Event e);
}

abstract class FilterPresenter extends HandleablePresenter {
	//ArrayList<MovieAttribute> filters; TODO: replace with model
	FilterPresenter(FilterView view, EventBus sectionEventBus ){
		super(view,sectionEventBus);
		//filters = new ArrayList<MovieAttribute>(); //TODO replace with model
	}
	public void handleEvent(Event e){
		if		(e instanceof FilterChangedEvent){
			//filters.add(((FilterChangedEvent)e).filter);
			
		}else if(e instanceof FilterFlushEvent){
			//this.globalEventBus.fireEvent(new QueryEvent(this,filters));
			//this.sectionEventBus.fireEvent(new FilterDiscardEvent());
			
		}else if(e instanceof FilterDiscardEvent){
			//this.filters.clear();
			
		}
	}
}

class GenreFilterPresenter extends FilterPresenter{
	GenreFilterPresenter(GenreFilterView view,EventBus sectionEventBus){
		super(view,sectionEventBus);
	}
}

class YearFilterPresenter extends FilterPresenter{
	YearFilterPresenter(YearFilterView view,EventBus sectionEventBus){
		super(view,sectionEventBus);
	}
}

class LanguageFilterPresenter extends FilterPresenter{
	LanguageFilterPresenter(LanguageFilterView view, EventBus sectionEventBus){
		super(view,sectionEventBus);
	}
}

class CountryFilterPresenter extends FilterPresenter{
	CountryFilterPresenter(CountryFilterView view, EventBus sectionEventBus){
		super(view,sectionEventBus);
	}
}

class SearchBoxFilterPresenter extends FilterPresenter{
	SearchBoxFilterPresenter(SearchBoxFilterView view, EventBus sectionEventBus){
		super(view,sectionEventBus);
	}
}

class WorldMapPresenter extends HandleablePresenter{
	WorldMapPresenter(WorldMapView view,EventBus sectionEventBus){
		super(view,sectionEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class TablePresenter extends HandleablePresenter {
	TablePresenter(TableView view,EventBus sectionEventBus){
		super(view,sectionEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class HeatMapPresenter extends HandleablePresenter{
	HeatMapPresenter(HeatMapView view,EventBus sectionEventBus){
		super(view,sectionEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class AdminareaPresenter extends HandleablePresenter{
	AdminareaPresenter(AdminareaView view,EventBus sectionEventBus){
		super(view,sectionEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class StatisticsPresenter extends HandleablePresenter{
	StatisticsPresenter(StatisticsView view,EventBus sectionEventBus){
		super(view,sectionEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class ChartPresenter extends HandleablePresenter{
	ChartPresenter(ChartView view,EventBus sectionEventBus){
		super(view,sectionEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class AdvertisementPresenter extends Presenter{
	AdvertismentView view;
	AdvertisementPresenter(AdvertismentView view,EventBus sectionEventBus){
		super(view,sectionEventBus);
	}
}

class NavigationPresenter extends Presenter{
	NavigationPresenter(NavigationView view,EventBus globalEventBus){
		super(view,globalEventBus);
	}
}

/*
 * Model
 */

abstract class Model{
	Model(){}
}

class WorldStatisticsModel extends Model{
	WorldStatisticsModel(){
		super();
	}
}
class StatisticsModel extends Model{
	StatisticsModel( ){
		super();
	}
}
class HeatMapModel extends Model{
	HeatMapModel(EventBus sectionEventBus){
		super();
	}
}

class MovieCollection extends Model{
	protected HashMap<String,Movie> movies;
	MovieCollection(){
		super();
		movies = new HashMap<String,Movie>();
	}
	public void add(Movie movie){
		String key = movie.title.value.toString();
		movies.put(key, movie);
	}
	public Collection<Movie> getMovies(){
		return this.movies.values();
	}
}

class FilterCollection extends Model{
	protected HashMap<String,MovieAttribute> filters;
	FilterCollection(){
		super();
		filters = new HashMap<String,MovieAttribute>();
	}
	public void add(MovieAttribute filter){
		String key = filter.value.toString();
		filters.put(key, filter);
	}
	public Collection<MovieAttribute> getFilters(){
		return this.filters.values();
	}
}
