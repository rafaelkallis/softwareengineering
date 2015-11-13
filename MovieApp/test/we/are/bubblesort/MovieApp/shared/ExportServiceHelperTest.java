package we.are.bubblesort.MovieApp.shared;

import static org.junit.Assert.*;
import java.io.UnsupportedEncodingException;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class ExportServiceHelperTest {

	@Before
	public void setUp() throws Exception {
	}

	@After
	public void tearDown() throws Exception {
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
	public void testQueryStringToFilterSet() throws UnsupportedEncodingException{
		UnorderedSet<MovieAttribute> compareSet = new UnorderedSet<MovieAttribute>();
		compareSet.add(new MovieTitle("Pulp Fiction"));
		compareSet.add(new MovieYear("1994"));
		compareSet.add(new MovieCountry("DE","Germany"));
		
		UnorderedSet<MovieAttribute> filterSet = ExportServiceHelper.queryStringToFilterSet("movie_countries=DE~Germany&movie_release_year=1994&movie_name=Pulp Fiction");
		
		for(MovieAttribute filter: filterSet){
			if(!filter.value.equals("Pulp Fiction")&& !filter.value.equals("1994")&& !filter.value.equals("DE")){
				fail("Failed");
			}
		}
	}

}
