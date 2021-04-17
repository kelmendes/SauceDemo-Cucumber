package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import stepdefinition.hook.Hook;

public class SauceDemoCartPO {

    WebDriver driver;
    public SauceDemoCartPO() {
        this.driver = Hook.getsDrivers();
    }

    public String divContainerListaDeItensHome = "//*[@id=\'inventory_container\']";
    public String spanQtdItensCarrinho = "//span[@class='shopping_cart_badge']";
    public String cartIcone = "//a[@class='shopping_cart_link']";

    public String btnCheckout = "//*[@id='checkout']";
    public String inputCheckoutName = "//*[@id='first-name']";
    public String inputCheckoutLastName = "//*[@id='last-name']";
    public String inputCheckoutCEP ="//*[@id='postal-code']";
    public String btnCheckoutContinue = "//*[@id='continue']";
    public String btnFinish = "//*[@id='finish']";

    public void adicionarItemCarrinho(String intenAdicionar){
        driver.findElement(By.xpath("//div[text()='" + intenAdicionar + "']/../../../div[2]/button")).click();
    }

    public int quantidadeItensCarrinho(){
        String strQuantideCart = driver.findElement(By.xpath(spanQtdItensCarrinho)).getText();
        int intQuantideCart = Integer.parseInt(strQuantideCart);
        return intQuantideCart;
    }

    public void btnCheckout(){
        ((JavascriptExecutor)driver).executeScript("arguments[0].scrollIntoView();",driver.findElement(By.xpath(btnCheckout)));
        driver.findElement(By.xpath(btnCheckout)).click();
    }

    public void setInputCheckoutName(String srtInputCheckoutName){
        driver.findElement(By.xpath(inputCheckoutName)).sendKeys(srtInputCheckoutName);
    }

    public void setInputCheckoutLastName(String strInputCheckoutLastName){
        driver.findElement(By.xpath(inputCheckoutLastName)).sendKeys(strInputCheckoutLastName);
    }

    public void setInputCheckoutCEP(String strInputCheckoutCEP){
        driver.findElement(By.xpath(inputCheckoutCEP)).sendKeys(strInputCheckoutCEP);
    }

    public void btnCheckoutContinue(){
        ((JavascriptExecutor)driver).executeScript("arguments[0].scrollIntoView();",driver.findElement(By.xpath(btnCheckoutContinue)));
        driver.findElement(By.xpath(btnCheckoutContinue)).click();
    }

    public void btnFinish(){
        ((JavascriptExecutor)driver).executeScript("arguments[0].scrollIntoView();",driver.findElement(By.xpath(btnFinish)));
        driver.findElement(By.xpath(btnFinish)).click();
    }

}
