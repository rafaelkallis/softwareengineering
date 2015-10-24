import java.util.List;
import java.util.ArrayList;
/*
 * Section
 */

/*
 * Dependencies:
 * 	GlobalEventBus
 */
public abstract class Section{
	protected EventBus sectionEventBus;
	protected EventBus globalEventBus;
	
	Section(EventBus globalEventBus){
		this.sectionEventBus 	= new EventBus();
		this.globalEventBus 	= globalEventBus;
	}
	abstract void activateSection();
}

final class WorldMapSection extends Section{
	
	private WorldMapView 			worldMapView;
	private WorldMapPresenter 		worldMapPresenter;
	
	private SelectListFilterView 	genreFilterView;
	private SelectListFilterView 	countryFilterView;
	private SelectListFilterView 	languageFilterView;
	private RangeSliderFilterView 	yearRangeSliderView;
	private FilterPresenter			filterPresenter;
	
	WorldMapSection(EventBus globalEventBus){
		super(globalEventBus);
		
		this.worldMapView 			= new WorldMapView(this.sectionEventBus);
		this.worldMapPresenter 		= new WorldMapPresenter(this.sectionEventBus,this.globalEventBus);
		
		this.genreFilterView 		= new SelectListFilterView(this.sectionEventBus);
		this.countryFilterView		= new SelectListFilterView(this.sectionEventBus);
		this.languageFilterView		= new SelectListFilterView(this.sectionEventBus);
		this.yearRangeSliderView	= new RangeSliderFilterView(this.sectionEventBus);
		this.filterPresenter		= new FilterPresenter(this.sectionEventBus,this.globalEventBus);
	}
	void activateSection(){
		// Nothing To do
	}
}
final class TableSection extends Section{
	
	private TableView 				tableView;
	private TablePresenter			tablePresenter;
	
	private SelectListFilterView 	genreFilterView;
	private SelectListFilterView 	countryFilterView;
	private SelectListFilterView 	languageFilterView;
	private SelectListFilterView	yearFilterView;
	private FilterPresenter			filterPresenter;
	
	TableSection(EventBus globalEventBus){
		super(globalEventBus);
		
		this.tableView				= new TableView(this.sectionEventBus);
		this.tablePresenter			= new TablePresenter(this.sectionEventBus,this.globalEventBus);
		
		this.genreFilterView 		= new SelectListFilterView(this.sectionEventBus);
		this.countryFilterView		= new SelectListFilterView(this.sectionEventBus);
		this.languageFilterView		= new SelectListFilterView(this.sectionEventBus);
		this.yearFilterView			= new SelectListFilterView(this.sectionEventBus);
		this.filterPresenter		= new FilterPresenter(this.sectionEventBus,this.globalEventBus);
	}
	void activateSection(){
		// Nothing To do
	}
}
final class HeatMapSection extends Section{
	private HeatMapView 			heatMapView;
	private HeatMapPresenter 		heatMapPresenter;
	
	private SelectListFilterView 	genreFilterView;
	private SelectListFilterView 	countryFilterView;
	private SelectListFilterView 	languageFilterView;
	private RangeSliderFilterView 	yearFilterView;
	private FilterPresenter			filterPresenter;	
	HeatMapSection(EventBus globalEventBus){
		super(globalEventBus);
		this.heatMapView			= new HeatMapView(this.sectionEventBus);
		this.heatMapPresenter		= new HeatMapPresenter(this.sectionEventBus,this.globalEventBus);
		
		this.genreFilterView 		= new SelectListFilterView(this.sectionEventBus);
		this.countryFilterView		= new SelectListFilterView(this.sectionEventBus);
		this.languageFilterView		= new SelectListFilterView(this.sectionEventBus);
		this.yearFilterView			= new RangeSliderFilterView(this.sectionEventBus);
		this.filterPresenter		= new FilterPresenter(this.sectionEventBus,this.globalEventBus);
	}
	void activateSection(){
		// Nothing To do
	}
}
final class StatisticsSection extends Section{
	private StatisticsView statisticsView;
	private StatisticsPresenter statisticsPresenter;
	
	StatisticsSection(EventBus globalEventBus){
		super(globalEventBus);
		
		this.statisticsView = new StatisticsView(this.sectionEventBus);
		this.statisticsPresenter = new StatisticsPresenter(this.sectionEventBus,this.globalEventBus);
	}
	void activateSection(){
		// Nothing To do
	}
}
final class AdminareaSection extends Section{
	AdminareaSection(EventBus globalEventBus){
		super(globalEventBus);
	}
	void activateSection(){
		// Nothing To do

	}
}

/*		
 * 										fire section events | fire global events | handle events
 * SectionObject:	 							[x]					[ ]					[ ]
 * SectionObjectWithGlobalEventBus:				[x]					[x]      			[ ]
 * HandlingSectionObject:						[x]					[ ]					[x]
 * HandlingSectionObjectWithGlobalEventBus:		[x]					[x]					[x]
 */

abstract class SectionObject{
	EventBus sectionEventBus;
	SectionObject(EventBus sectionEventBus){
		this.sectionEventBus = sectionEventBus;
	}
}

abstract class SectionObjectWithGlobalEventBus extends SectionObject{
	EventBus globalEventBus;
	SectionObjectWithGlobalEventBus(EventBus sectionEventBus,EventBus globalEventBus){
		super(sectionEventBus);
	}
}

abstract class HandlingSectionObject extends SectionObject implements EventHandleable{
	HandlingSectionObject(EventBus sectionEventBus){
		super(sectionEventBus);
		this.sectionEventBus.subscribe(this);
	}
	public abstract void handleEvent(Event e);
}

abstract class HandlingSectionObjectWithGlobalEventBus extends SectionObjectWithGlobalEventBus implements EventHandleable{
	HandlingSectionObjectWithGlobalEventBus(EventBus sectionEventBus, EventBus globalEventBus){
		super(sectionEventBus,globalEventBus);
		this.sectionEventBus.subscribe(this);
		this.globalEventBus.subscribe(this);
	}
	public abstract void handleEvent(Event e);
}

/*
 * Views
 */

class ImportView extends HandlingSectionObject{
	ImportView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
	public void handleEvent(Event e){
		//handle event here
	}
}

abstract class FilterView extends SectionObject{
	FilterView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}

class RangeSliderFilterView extends FilterView{
	RangeSliderFilterView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}
class SelectListFilterView extends FilterView {
	SelectListFilterView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
	void aFunctionCalledWhenYearFilterSelected(MovieYear year){
		this.sectionEventBus.fireEvent(new FilterChangedEvent(year));
	}
}

class SearchBoxFilterView extends FilterView {
	  SearchBoxFilterView(EventBus sectionEventBus){
			super(sectionEventBus);
	}
}

abstract class ChartView extends HandlingSectionObject{
	ChartView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}

class PieChartView extends ChartView {
	PieChartView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
	public void handleEvent(Event e){
		// TODO handle event here
	}
}

class BarChartView extends ChartView {
	BarChartView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
	public void handleEvent(Event e){
		// TODO handle event here
	}
}

class AdvertismentView extends SectionObject {
	AdvertismentView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
}
class NavigationView {
	List<Section> sections;
	protected EventBus globalEventBus;
	NavigationView(EventBus globalEventBus,List<Section> sections){
		this.globalEventBus = globalEventBus;
		this.sections = sections;
	}
	// example
	void worldMapSectionClickedfromUser(){
		this.globalEventBus.fireEvent(new ActivateSectionEvent(sections.get(0)));
	}
}

class WorldMapView extends HandlingSectionObject{
	WorldMapView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
	public void handleEvent(Event e){
		if(e instanceof UpdateMoviesEvent){
			List<Movie> newMovies = ((UpdateMoviesEvent)e).newMovies;
			// do something with newMovies
		}
	}
}

class TableView extends HandlingSectionObject{
	TableView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
	public void handleEvent(Event e){
		if(e instanceof UpdateMoviesEvent){
			List<Movie> newMovies = ((UpdateMoviesEvent)e).newMovies;
			// do something with newMovies
		}
	}
}
class HeatMapView extends HandlingSectionObject{
	HeatMapView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}
class StatisticsView extends HandlingSectionObject{
	StatisticsView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}
class AdminareaView extends HandlingSectionObject{
	AdminareaView(EventBus sectionEventBus){
		super(sectionEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

/*
 * Presenter
 */

class FilterPresenter extends HandlingSectionObjectWithGlobalEventBus implements Respondable<Movie>{
	ArrayList<MovieAttribute> filters;
	FilterPresenter(EventBus sectionEventBus,EventBus globalEventBus){
		super(sectionEventBus,globalEventBus);
		filters = new ArrayList<MovieAttribute>();
	}
	public void handleEvent(Event e){
		if		(e instanceof FilterChangedEvent){
			filters.add(((FilterChangedEvent)e).filter);
			
		}else if(e instanceof FilterFlushEvent){
			this.globalEventBus.fireEvent(new QueryEvent(this,filters));
			this.sectionEventBus.fireEvent(new FilterDiscardEvent());
			
		}else if(e instanceof FilterDiscardEvent){
			this.filters.clear();
			
		}
	}
	public void respond(List<Movie> movies){
		this.sectionEventBus.fireEvent(new UpdateMoviesEvent(movies));
	}
}

class WorldMapPresenter extends HandlingSectionObjectWithGlobalEventBus{
	WorldMapPresenter(EventBus sectionEventBus,EventBus globalEventBus){
		super(sectionEventBus,globalEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class TablePresenter extends HandlingSectionObjectWithGlobalEventBus {
	TablePresenter(EventBus sectionEventBus,EventBus globalEventBus){
		super(sectionEventBus,globalEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class HeatMapPresenter extends HandlingSectionObjectWithGlobalEventBus{
	HeatMapPresenter(EventBus sectionEventBus,EventBus globalEventBus){
		super(sectionEventBus,globalEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class AdminareaPresenter extends HandlingSectionObjectWithGlobalEventBus{
	AdminareaPresenter(EventBus sectionEventBus,EventBus globalEventBus){
		super(sectionEventBus,globalEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class StatisticsPresenter extends HandlingSectionObjectWithGlobalEventBus{
	StatisticsPresenter(EventBus sectionEventBus,EventBus globalEventBus){
		super(sectionEventBus,globalEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class ChartPresenter extends HandlingSectionObjectWithGlobalEventBus{
	ChartPresenter(EventBus sectionEventBus,EventBus globalEventBus){
		super(sectionEventBus,globalEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class AdvertisementPresenter extends HandlingSectionObjectWithGlobalEventBus{
	AdvertisementPresenter(EventBus sectionEventBus,EventBus globalEventBus){
		super(sectionEventBus,globalEventBus);
	}
	public void handleEvent(Event e){
		//TODO handle event here
	}
}

class NavigationPresenter implements EventHandleable{
	EventBus globalEventBus;
	NavigationPresenter(EventBus globalEventBus){
		this.globalEventBus = globalEventBus;
		this.globalEventBus.subscribe(this);
	}
	public void handleEvent(Event e){
		if(e instanceof ActivateSectionEvent){
			((ActivateSectionEvent)e).section.activateSection();
			// update the window (set visibility to new section)
		}
	}
}

/*
 * Model
 */

class WorldStatisticsModel {
	WorldStatisticsModel(){}
}
class StatisticsModel {
	StatisticsModel( ){}
}
class HeatMapModel{
	HeatMapModel(EventBus sectionEventBus){}
}
