package we.are.bubblesort.MovieApp.shared;

import java.io.UnsupportedEncodingException;
import com.google.gwt.http.client.URL;
import com.google.gwt.core.client.GWT;

public class ExportServiceHelper {
	
	/*
	 * @param filters the filterSet to be encoded into an url-String
	 * @returns String the encoded url-String
	 */
	public static String filterSetToUrlString(UnorderedSet<MovieAttribute> filters) {
		Collection<String> filterUrls = new Collection<String>();
		for(MovieAttribute filter : filters){
			filterUrls.add(ExportServiceHelper.filterToQueryString(filter));
		}
		return GWT.getHostPageBaseURL()+"export?"+filterUrls.toJoinedString("&");
	}
	
	/*
	 * @param filter the filter to be encoded
	 * @returns String the encoded filter
	 */
	public static String filterToQueryString(MovieAttribute filter){
		if(filter.value.equals(filter.displayName)){
			return URL.encode(filter.urlName)+"="+URL.encode(filter.value);
		}else{
			return URL.encode(filter.urlName)+"="+URL.encode(filter.value+"~"+filter.displayName);
		}
	}
	
	/*
	 * @param queryString the String from request.getQueryString()
	 * @returns UnorderedSet<MovieAttribute> the set of filters
	 */
	public static UnorderedSet<MovieAttribute> queryStringToFilterSet(String queryString) throws UnsupportedEncodingException{
		UnorderedSet<MovieAttribute> filterSet = new UnorderedSet<MovieAttribute>();	

		String[] queryParameters = queryString.split("&", -1);
		
		for(String queryParameter : queryParameters){
			if (queryParameter.contains("=")) {
				String[] name_valueDisplayName = queryParameter.split("=", -1);
				String[] value_displayName = name_valueDisplayName[1].split("~", -1);
				filterSet.add(ExportServiceHelper.paramToFilter(name_valueDisplayName[0], value_displayName));
			}else{
				System.err.println("Error converting queryParameter to filter: <"+queryParameter+">");
			}
		}
		return filterSet;
	}
		
	/*
	 * @param paramName the attribute name decoded from the url
	 * @param paramValue the attribute value(s) decoded from the url
	 * @returns MovieAttribute the new filter
	 * @pre paramName,paramValue already decoded
	 */
	public static MovieAttribute paramToFilter(String paramName,String[] paramValue){
		
		switch(paramName){
			case MovieID.urlName:
				return new MovieID(paramValue[0]);
				
			case MovieTitle.urlName:
				return new MovieTitle(paramValue[0]);
				
			case MovieGenre.urlName:
				return new MovieGenre(paramValue[0],paramValue[1]);
				
			case MovieDuration.urlName:
				return new MovieDuration(paramValue[0]);
				
			case MovieCountry.urlName:
				return new MovieCountry(paramValue[0],paramValue[1]);
				
			case MovieLanguage.urlName:
				return new MovieLanguage(paramValue[0],paramValue[1]);
				
			case MovieYear.urlName:
				return new MovieYear(paramValue[0]);
				
			default:
				return null;
	    }
	}

	
	public static String toSV(Collection<Movie> movies, String delimiter){
		Collection<String> join_list = new Collection<String>(movies.size());
		for(Movie movie : movies){
			join_list.add(movie.toJoinedString(delimiter));
		}
		return join_list.toJoinedString("\n");
	}
	
	
}