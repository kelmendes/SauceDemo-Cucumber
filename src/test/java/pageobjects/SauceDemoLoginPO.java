package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import stepdefinition.hook.Hook;

public class SauceDemoLoginPO {

    WebDriver driver;
    public SauceDemoLoginPO() {
        this.driver = Hook.getsDrivers();
    }

    public String inputUserName = "//*[@id=\'user-name\']";
    public String inputPassword = "//*[@id=\'password\']";
    public String btnLogin = "//*[@id=\'login-button\']";
    public String alertErroLogin = "//h3[@data-test='error']";
    public String btnMenuLateral = "//*[@id=\"react-burger-menu-btn\"]";
    public String btnLogoutMenuLateral = "//*[@id=\"logout_sidebar_link\"]";

    public void setInputUserName(String strInputUserName){
        driver.findElement(By.xpath(inputUserName)).sendKeys(strInputUserName);
    }

    public void setInputPassword(String strInputPassword){
        driver.findElement(By.xpath(inputPassword)).sendKeys(strInputPassword);
    }

    public void btnLogin(){
        driver.findElement(By.xpath(btnLogin)).click();
    }

    public boolean alertErroLogin(){
        return driver.findElement(By.xpath(alertErroLogin)).isDisplayed();
    }

    public void btnMenuLateral(){
        driver.findElement(By.xpath(btnMenuLateral)).click();
    }

    public void btnLogoutMenuLateral(){
        driver.findElement(By.xpath(btnLogoutMenuLateral)).click();
    }

}
