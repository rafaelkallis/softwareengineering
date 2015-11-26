package we.are.bubblesort.MovieApp.shared;


@SuppressWarnings("serial")
public class ImportFormatException extends Exception {

	public ImportFormatException() {
		super("The uploaded document's format is not supported");
	}

	public ImportFormatException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}

	public ImportFormatException(Throwable cause) {
		super(cause);
		// TODO Auto-generated constructor stub
	}

	public ImportFormatException(String message, Throwable cause) {
		super(message, cause);
		// TODO Auto-generated constructor stub
	}

}
