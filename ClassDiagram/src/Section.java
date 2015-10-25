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
public abstract class Section implements BusEventHandleable{
	protected EventBus 					sectionEventBus;
	protected EventBus 					globalEventBus;
	
	Section(EventBus globalEventBus){
		this.sectionEventBus 			= new EventBus();
		this.globalEventBus 			= globalEventBus;
	}
	//used as a router from internal(sectionEventBus) to external(globalEventBus) communication and vice-versa 
	//e.g new query
	public abstract void handleEvent(Event e);
	
	//actions taken when section is being activated
	abstract void activateSection();
}

final class WorldMapSection extends Section{
	
	private WorldMapPresenter			worldMap;
	private FilterPresenter				genreFilter;
	private FilterPresenter				yearFilter;
	private AdvertisementPresenter		advertisment;
	
	WorldMapSection(EventBus globalEventBus){
		super(globalEventBus);
		
		this.worldMap			 		= new WorldMapPresenter			(new WorldMapView(worldMap),this.sectionEventBus);
		this.genreFilter				= new FilterPresenter			(new SelectListView(genreFilter),this.sectionEventBus);
		this.yearFilter 				= new FilterPresenter			(new SelectListView(yearFilter),this.sectionEventBus);
		this.advertisment				= new AdvertisementPresenter	(new AdvertismentView(advertisment),this.sectionEventBus);
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
	private FilterPresenter				genreFilter;
	private FilterPresenter				yearFilter;
	private FilterPresenter				languageFilter;
	private FilterPresenter 			countryFilter;
	private FilterPresenter 			titleFilter;
	private AdvertisementPresenter		advertisment;
	
	TableSection(EventBus globalEventBus){
		super(globalEventBus);
		
		this.table						= new TablePresenter			(new TableView(table),this.sectionEventBus);
		this.genreFilter				= new FilterPresenter			(new SelectListView(genreFilter),this.sectionEventBus);
		this.countryFilter				= new FilterPresenter			(new SelectListView(countryFilter),this.sectionEventBus);
		this.languageFilter				= new FilterPresenter			(new SelectListView(languageFilter),this.sectionEventBus);
		this.yearFilter					= new FilterPresenter			(new SelectListView(yearFilter),this.sectionEventBus);
		this.titleFilter				= new FilterPresenter			(new SearchBoxFilterView(titleFilter),this.sectionEventBus);
		this.advertisment				= new AdvertisementPresenter	(new AdvertismentView(advertisment),this.sectionEventBus);
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
	private FilterPresenter 			genreFilter;
	private FilterPresenter 			yearFilter;
	private AdvertisementPresenter		advertisment;
	
	HeatMapSection(EventBus globalEventBus){
		super(globalEventBus);
		
		this.heatMap					= new HeatMapPresenter			(new HeatMapView(heatMap),this.sectionEventBus);
		this.genreFilter	 			= new FilterPresenter			(new SelectListView(genreFilter),this.sectionEventBus);
		this.yearFilter					= new FilterPresenter			(new SelectListView(yearFilter),this.sectionEventBus);
		this.advertisment				= new AdvertisementPresenter	(new AdvertismentView(advertisment),this.sectionEventBus);
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
		
		this.statistics 				= new StatisticsPresenter		(new StatisticsView(statistics),this.sectionEventBus);
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

/*
 * Views
 */

abstract class View{
	Presenter presenter;
	View(Presenter presenter){
		this.presenter = presenter;
	}
	void fireEvent(Event e){
		this.presenter.handleEvent(e);
	}
}

abstract class FilterView extends View{
	FilterView(FilterPresenter presenter){
		super(presenter);
	}
}

class SelectListView extends FilterView{
	SelectListView(FilterPresenter presenter){
		super(presenter);
	}
}

class RangeSliderFilterView extends FilterView {
	RangeSliderFilterView(FilterPresenter presenter ){
		super(presenter);
	}
}

class SearchBoxFilterView extends FilterView {
	 SearchBoxFilterView(FilterPresenter presenter ){
		super(presenter);
	 }
}

abstract class ChartView extends View{
	ChartView(Presenter presenter ){
		super(presenter);
	}
}

class PieChartView extends ChartView {
	PieChartView(Presenter presenter ){
		super(presenter);
	}
}

class BarChartView extends ChartView {
	BarChartView(Presenter presenter ){
		super(presenter);
	}
}

class ImportView extends View{
	ImportView(Presenter presenter ){
		super(presenter);
	}
}

class AdvertismentView extends View{
	AdvertismentView(Presenter presenter ){
		super(presenter);
	}
}
class NavigationView extends View{
	NavigationView(Presenter presenter ){
		super(presenter);
	}
}

class WorldMapView extends View{
	WorldMapView(Presenter presenter ){
		super(presenter);
	}
}

class TableView extends View{
	TableView(Presenter presenter){
		super(presenter);
	}
}
class HeatMapView extends View{
	HeatMapView(Presenter presenter ){
		super(presenter);
	}
}
class StatisticsView extends View{
	StatisticsView(Presenter presenter ){
		super(presenter);
	}
}
class AdminareaView extends View{
	AdminareaView(Presenter presenter ){
		super(presenter);
	}
}

/*
 * Presenter
 * All presenters can fireEvents on section Bus
 */

//listens to events only from view
abstract class Presenter{
	View view;
	EventBus sectionEventBus;
	Presenter(View view,EventBus sectionEventBus){
		this.view = view;
		this.sectionEventBus = sectionEventBus;
	}
	abstract void handleEvent(Event e);
	void fireEvent(Event e){
		this.sectionEventBus.fireEvent(e);
	}
}

//can listen to events on section bus and view
abstract class ListeningPresenter extends Presenter implements BusEventHandleable{
	ListeningPresenter(View view, EventBus sectionEventBus){
		super(view,sectionEventBus);
		this.sectionEventBus.subscribe(this);
	}
	public abstract void handleEvent(Event e);
}

class FilterPresenter extends ListeningPresenter {
	FilterCollection filters;
	FilterPresenter(FilterView view, EventBus sectionEventBus ){
		super(view,sectionEventBus);
		filters = new FilterCollection();
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

class WorldMapPresenter extends ListeningPresenter{
	WorldMapPresenter(WorldMapView view,EventBus sectionEventBus){
		super(view,sectionEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class TablePresenter extends ListeningPresenter {
	TablePresenter(TableView view,EventBus sectionEventBus){
		super(view,sectionEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class HeatMapPresenter extends ListeningPresenter{
	HeatMapPresenter(HeatMapView view,EventBus sectionEventBus){
		super(view,sectionEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class AdminareaPresenter extends ListeningPresenter{
	AdminareaPresenter(AdminareaView view,EventBus sectionEventBus){
		super(view,sectionEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class StatisticsPresenter extends ListeningPresenter{
	StatisticsPresenter(StatisticsView view,EventBus sectionEventBus){
		super(view,sectionEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class ChartPresenter extends ListeningPresenter{
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
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class NavigationPresenter extends Presenter {
	NavigationPresenter(NavigationView view,EventBus globalEventBus){
		super(view,globalEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
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
