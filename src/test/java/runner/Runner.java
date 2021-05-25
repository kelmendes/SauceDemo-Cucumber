package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/java/features"}
        ,glue = {"stepdefinition"}
        ,plugin = {"com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:target/output/report.html"}
        ,dryRun = false
        ,tags = {
                "@LoginValidUser, " +
                "@LoginUserBlock, "+
                "@LoginInvalidUser, " +
                "@CartAddItems, " +
                "@CartValidateItems, " +
                "@CartCheckout"
        }
)
public class Runner {
}
