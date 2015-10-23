/*
 * Section
 */
public abstract class Section {
	protected Object sectionEventBus;
	Section(Object sectionEventBus){
		this.sectionEventBus = sectionEventBus;
	}
	void ActivateSection(){
		
	}
}

class WorldMapSection extends Section{
	WorldMapSection(Object sectionEventBus){
		super(sectionEventBus);
	}
}
class TableSection extends Section{
	private TableView tableView;
	private FilterView languageFilterView;
	TableSection(Object sectionEventBus){
		super(sectionEventBus);
	}
}
class HeatMapSection extends Section{
	HeatMapSection(Object sectionEventBus){
		super(sectionEventBus);
	}
}
class StatisticsSection extends Section{
	StatisticsSection(Object sectionEventBus){
		super(sectionEventBus);
	}
}
class AdminareaSection extends Section{
	AdminareaSection(Object sectionEventBus){
		super(sectionEventBus);
	}
}

/*
 * View
 */
interface FilterViewInterface {
}

class RangeSliderView implements FilterViewInterface {
  
}
class SelectListView implements FilterViewInterface {
  
}
class LoginView {
  
}
class ImportView {
  
}
class PieChartView implements ChartViewInterface {
  
}
class BarChartView implements ChartViewInterface {
  
}
interface ChartViewInterface {
  
}
class SearchBoxView implements FilterViewInterface {
  
}
class AdvertismentView {
  
}
class NavigationView {
  
}

class WorldMapView{
	
}
class TableView{
	
}
class HeatMapView{
	
}
class StatisticsView{
	
}
class AdminareaView{
	
}

/*
 * Presenter
 */
class TablePresenter {

}

class LoginPresenter {

}

class ImportPresenter {

}

class StatisticsPresenter {

}

class ChartPresenter {
	private ChartViewInterface view;
}

class FilterPresenter {
	private FilterViewInterface view;
	private MovieAttribute attribute;
}

class YearFilterPresenter extends FilterPresenter {

}

class LanguageFilterPresenter extends FilterPresenter {

}

class GenreFilterPresenter extends FilterPresenter {

}

class CountryFilterPresenter extends FilterPresenter {

}

class AdvertisementPresenter {

}

class NavigationPresenter {

}
/*
 * Model
 */

class WorldStatisticsModel{
	
}
class StatisticsModel{
	
}
class FilterModel{
	
}
class MovieCollection{
	
}