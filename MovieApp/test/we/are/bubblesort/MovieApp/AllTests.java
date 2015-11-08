package we.are.bubblesort.MovieApp;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;
import we.are.bubblesort.MovieApp.client.*;
import we.are.bubblesort.MovieApp.shared.*;
import we.are.bubblesort.MovieApp.server.*;


@RunWith(Suite.class)
@SuiteClasses({ CollectionTest.class, UnorderedSetTest.class, OrderedSetTest.class, DatabaseTest.class, QueryServiceImplTest.class, TablePresenterTest.class, WorldStatisticsModelTest.class, AppControllerTest.class, FilterBarPresenterTest.class, FilterPresenterTest.class, MapPresenterTest.class})
public class AllTests {

}
