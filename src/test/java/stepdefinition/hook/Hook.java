package stepdefinition.hook;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.util.concurrent.TimeUnit;

public class Hook {

    public static WebDriver driver;

    @Before
    public void tearUP(){

        WebDriverManager.chromedriver().setup();
        ChromeOptions option = new ChromeOptions();
        option.setHeadless(false);
        driver = new ChromeDriver(option);

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
