package we.are.bubblesort.MovieApp.shared;

import static org.junit.Assert.*;
import java.io.UnsupportedEncodingException;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class ExportHelperTest {

	@Before
	public void setUp() throws Exception {
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testfilterSetToUrlString() throws UnsupportedEncodingException {
		UnorderedSet<MovieAttribute> filterSet = new UnorderedSet<MovieAttribute>();
		filterSet.add(new MovieTitle("Pulp Fiction"));
		filterSet.add(new MovieYear("1994"));
		filterSet.add(new MovieCountry("DE","Germany"));
		
		assertEquals("movie_countries=DE%7CGermany&movie_release_year=1994&movie_name=Pulp+Fiction",ExportServiceHelper.filterSetToUrlString(filterSet));
	}
	
	@Test
	public void testParamToFilter(){
		MovieAttribute title_filter = ExportServiceHelper.paramToFilter("movie_name", new String[]{"Pulp Fiction"});
		MovieAttribute country_filter = ExportServiceHelper.paramToFilter("movie_countries", new String[]{"CH","Schweiz"});
		assertEquals("Pulp Fiction",title_filter.value);
		assertEquals("CH",country_filter.value);
		assertEquals("Schweiz",country_filter.displayName);
	}
	
	@Test
	public void testFilterToUrlString() throws UnsupportedEncodingException{
		assertEquals("movie_name=Pulp+Fiction",ExportServiceHelper.filterToQueryString(new MovieTitle("Pulp Fiction")));
		assertEquals("movie_countries=CH%7CSchweiz",ExportServiceHelper.filterToQueryString(new MovieCountry("CH","Schweiz")));
	}
	
	@Test
	public void testQueryStringToFilterSet() throws UnsupportedEncodingException{
		UnorderedSet<MovieAttribute> compareSet = new UnorderedSet<MovieAttribute>();
		compareSet.add(new MovieTitle("Pulp Fiction"));
		compareSet.add(new MovieYear("1994"));
		compareSet.add(new MovieCountry("DE","Germany"));
		
		UnorderedSet<MovieAttribute> filterSet = ExportServiceHelper.queryStringToFilterSet("movie_countries=DE|Germany&movie_release_year=1994&movie_name=Pulp Fiction");
		
		for(MovieAttribute filter: filterSet){
			if(!filter.value.equals("Pulp Fiction")&& !filter.value.equals("1994")&& !filter.value.equals("DE")){
				fail("Failed");
			}
		}
	}

}
