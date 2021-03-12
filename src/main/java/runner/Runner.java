package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/main/java/features"}
        ,glue = {"stepdefinition"}
        ,plugin = {"html:target/cucumber-html-report", "com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:target/output/report.html"}
        ,dryRun = false
        ,tags = {
//                "@Login, " +
                "@Cart"
        }
)
public class Runner {
}
