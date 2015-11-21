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

	/*
	 * @param line the line of text to be parsed
	 * @returns String[] array of all values parsed
	 */
	public String[] parseTSV(String line) throws IOException{
		return parseFormat(line,CSVFormat.TDF);
	}
	
	/*
	 * @param line the line of text to be parsed
	 * @returns String[] array of all values parsed
	 */
	public String[] parseCSV(String line) throws IOException{
		return parseFormat(line,CSVFormat.DEFAULT);
	}
	
	/*
	 * @param line the line of text to be parsed
	 * @returns String[] array of all values parsed
	 */
	public String[] parseExcel(String line) throws IOException{
		return parseFormat(line,CSVFormat.EXCEL);
	}
	
	/*
	 * @param line the line of text to be parsed
	 * @param format the format of the tring to be parsed. Used to specify the delimiter
	 * @returns String[] array of all values parsed
	 */
	public String[] parseFormat(String line,CSVFormat format) throws IOException{
		CSVRecord movieRecord 	= CSVParser.parse(line, format).getRecords().get(0);
		String records[] 		= new String[7];
		
		records[0] 				= this.extractTitle		(movieRecord.get(2));
		records[1] 				= this.extractYear		(movieRecord.get(3));
		records[2] 				= this.extractRevenue	(movieRecord.get(4));
		records[3] 				= this.extractDuration	(movieRecord.get(5));
		records[4] 				= this.extractLanguages	(movieRecord.get(6));
		records[5]				= this.extractCountries	(movieRecord.get(7));
		records[6] 				= this.extractGenres	(movieRecord.get(8));
		
		return records;
	}
	
	/*
	 * @param value
	 * @returns String
	 */
	private String extractTitle(String value){
    	return value;
    }
    
	/*
	 * @param value
	 * @returns String
	 */
    private String extractYear(String value){     	
    	return value.substring(0, 4);
    }
    
    /*
     * @param value
     * @returns String
     */
    private String extractRevenue(String value){
    	return value;
    }
    
    /*
     * @param value
     * @returns String
     */
    private String extractDuration(String value){    	
    	return value;
    }
    
    /*
     * @param value
     * @returns String
     */
    private String extractLanguages(String value){
    	return value.replaceAll("\"/m/[0-9a-zA-Z_]*\": |[\"{}]", "");
    }
    
    /*
     * @param value
     * @returns String
     */
    private String extractCountries(String value){
    	return value.replaceAll("\"/m/[0-9a-zA-Z_]*\": |[\"{}]", "");
    }
    
    /*
     * @param value
     * @returns String
     */
    private String extractGenres(String value){
    	return value.replaceAll("\"/m/[0-9a-zA-Z_]*\": |[\"{}]", "");
    }
	
}
