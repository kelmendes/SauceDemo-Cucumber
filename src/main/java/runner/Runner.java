package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/main/java/features"}
        ,glue = {"stepdefinition"}
        ,dryRun = false
        ,tags = {"@Test"}
)
public class Runner {
}
