package stepdefinition.hook;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;

public class Hook {

    public static WebDriver driver;

    @Before
    public void tearUP(){
        System.out.println("+++++ UP - HOOK ++++++++++++");
        System.setProperty("webdriver.gecko.driver","C:\\drivers\\geckodriver.exe");
        driver = new FirefoxDriver();

        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);

        driver.manage().deleteAllCookies();
        driver.manage().window().maximize();

    }

    public static WebDriver getsDrivers(){
        return driver;
    }

    @After
    public void tearDown(){
        System.out.println("+++++++++ Down - HOOK +++++++++++");
        driver.close();
    }


}
