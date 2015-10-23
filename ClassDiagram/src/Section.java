/*
 * Section
 */
public class Section {

}

class WorldMapSection extends Section{
	
}
class TableSection extends Section{
	
}
class HeatMapSection extends Section{
	
}
class StatisticsSection extends Section{
	
}
class AdminareaSection extends Section{
	
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
