package models;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import pageobjects.SauceDemoCartPO;
import stepdefinition.hook.Hook;

import java.util.List;

public class SauceDemoCartMO {
    WebDriver driver;
    SauceDemoCartPO object = new SauceDemoCartPO();

    public SauceDemoCartMO() {
        this.driver = Hook.getsDrivers();
    }

    public void adicionarItensAoCarrinho(List<String> listItensAdicionar){
        for(int i=0;i<listItensAdicionar.size();i++) {
            driver.findElement(By.xpath("//div[text()='" + listItensAdicionar.get(i) + "']/./../../../div[3]/button")).click();
        }
    }

    public void verificarContador(int intQuantidadeItens){
        String strQuantideCart = driver.findElement(By.xpath(object.spanQtdItensCarrinho)).getText();
        int intQuantideCart = Integer.parseInt(strQuantideCart);
        Assert.assertArrayEquals(new int[]{intQuantidadeItens}, new int[]{intQuantideCart});
    }

    public void acessarCartdeCompras(){
        driver.findElement(By.xpath(object.cartIcone)).click();
    }

    public void verificarItensNoCarrinho(List<String> listIntensCart){
        for(int i=0;i<listIntensCart.size();i++) {
            driver.findElement(By.xpath("//div[text()='" + listIntensCart.get(i) + "']")).isDisplayed();
        }
    }

    public void clicarBtnCheckout(){
        ((JavascriptExecutor)driver).executeScript("arguments[0].scrollIntoView();",driver.findElement(By.xpath(object.btnCheckout)));
        driver.findElement(By.xpath(object.btnCheckout)).click();
    }

    public void preencherDadosDoCheckout(){
        driver.findElement(By.xpath(object.inputCheckoutName)).sendKeys("TESTE NOME");
        driver.findElement(By.xpath(object.inputCheckoutLastName)).sendKeys("SOBRE NOME");
        driver.findElement(By.xpath(object.inputCheckoutCEP)).sendKeys("55034090");
    }

    public void clicarBtnContinue(){
        ((JavascriptExecutor)driver).executeScript("arguments[0].scrollIntoView();",driver.findElement(By.xpath(object.btnCheckoutContinue)));
        driver.findElement(By.xpath(object.btnCheckoutContinue)).click();
    }

    public void clicarBtnFinish(){
        ((JavascriptExecutor)driver).executeScript("arguments[0].scrollIntoView();",driver.findElement(By.linkText(object.btnFinish)));
        driver.findElement(By.linkText(object.btnFinish)).click();
    }

    public void validarTelaDespachoOrdem(){
        //h2[@class='complete-header'] = THANK YOU FOR YOUR ORDER
        //div[@class='complete-text'] = Your order has been dispatched, and will arrive just as fast as the pony can get there!
        driver.findElement(By.xpath("//h2[@class='complete-header']")).isDisplayed();
        driver.findElement(By.xpath("//div[@class='complete-text']")).isDisplayed();


    }
}
