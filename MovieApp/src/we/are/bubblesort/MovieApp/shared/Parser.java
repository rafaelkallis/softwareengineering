package we.are.bubblesort.MovieApp.shared;

import java.io.IOException;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;

public class Parser {
	
	private static Parser instance = new Parser();
	
	private Parser(){
		
	}
	
	/*
	 * @param line the line of text to be parsed
	 * @returns String[] array of all values parsed
	 */
	public static Parser getInstance(){
		return instance;
	}
	private String extractTitle(String value){
    	return value;
    }
    
    private String extractYear(String value){     	
    	return value.substring(0, 4);
    }
    
    private String extractRevenue(String value){
    	return value;
    }
    
    private String extractDuration(String value){    	
    	return value;
    }
    
    private String extractLanguages(String value){
    	return value.replaceAll("\"/m/[0-9a-zA-Z_]*\": |[\"{}]", "");
    }
    
    private String extractCountries(String value){
    	return value.replaceAll("\"/m/[0-9a-zA-Z_]*\": |[\"{}]", "");
    }
    
    private String extractGenres(String value){
    	return value.replaceAll("\"/m/[0-9a-zA-Z_]*\": |[\"{}]", "");
    }
	
}
