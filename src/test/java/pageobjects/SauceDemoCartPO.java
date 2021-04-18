package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import stepdefinition.hook.Hook;

import static utils.utils.scrollToElement;

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

    public boolean listaDeItensHome(){
        return driver.findElement(By.xpath(divContainerListaDeItensHome)).isDisplayed();
    }

    public void cartIcone(){
        driver.findElement(By.xpath(cartIcone)).click();
    }

    public int quantidadeItensCarrinho(){
        String strQuantideCart = driver.findElement(By.xpath(spanQtdItensCarrinho)).getText();
        return Integer.parseInt(strQuantideCart);
    }

    public void btnCheckout(){
        scrollToElement(By.xpath(btnCheckout));
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
        scrollToElement(By.xpath(btnCheckoutContinue));
        driver.findElement(By.xpath(btnCheckoutContinue)).click();
    }

    public void btnFinish(){
        scrollToElement(By.xpath(btnFinish));
        driver.findElement(By.xpath(btnFinish)).click();
    }

    public boolean verificarItenNoCarrinho(String strNomeItem) {
         return  driver.findElement(By.xpath("//div[text()='" + strNomeItem + "']")).isDisplayed();
    }

}
