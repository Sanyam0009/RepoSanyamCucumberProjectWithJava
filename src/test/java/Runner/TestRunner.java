package Runner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\$akshi\\workspace\\CucumberProjectWithJava\\src\\test\\java\\Feature",  // path of feature folder
		glue={"stepDefination"}, // Step Defination folder name
		format={"pretty","html:test-output"}, //this will generate a HTML report at test-output folder //it can also generate different type of report like Jeson,XML , HTML
		dryRun = false, // make it true to see maping of all the steps in feature file with step defination file and will not launch the test case
		//strict = true, //it will check if any step is not defind in Stepdefination file file.
		monochrome = true // to display the console output in proper readable format 
		)

public class TestRunner {

}
