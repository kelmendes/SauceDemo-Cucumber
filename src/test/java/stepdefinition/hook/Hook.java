package stepdefinition.hook;

import io.cucumber.java.After;
import io.cucumber.java.AfterStep;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.util.concurrent.TimeUnit;

public class Hook {

    public static WebDriver driver;

    @Before
    public void tearUP(Scenario scenario){

        System.out.println("+++++++++ UP - HOOK +++++++++++");

        WebDriverManager.chromedriver().setup();
        ChromeOptions option = new ChromeOptions();
        option.setHeadless(true);
        driver = new ChromeDriver(option);

        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        driver.manage().window().setSize(new Dimension(1024, 542));
        driver.manage().deleteAllCookies();
        driver.manage().window().maximize();

        System.out.println("Before Scenario: " + scenario.getName());

    }

    @AfterStep
    public void setScreenShot(Scenario scenario) throws NoSuchFieldException, IllegalAccessException {
        System.out.println("Append Screen Shot, After Step!");
        byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
        scenario.attach(screenshot, "image/png", "name");
    }


    public static WebDriver getsDrivers(){
        return driver;
    }

    @After
    public void tearDown(Scenario scenario){
        System.out.println("After Scenario: " + scenario.getName());
        System.out.println("+++++++++ Down - HOOK +++++++++++");
        driver.close();
    }


}
