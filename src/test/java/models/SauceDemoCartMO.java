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
        for (String s : listItensAdicionar) {
            object.adicionarItemCarrinho(s);
        }
    }

    public void verificarContador(int intQuantidadeItens){
        Assert.assertArrayEquals(new int[]{intQuantidadeItens}, new int[]{object.quantidadeItensCarrinho()});
    }

    public void acessarCartdeCompras(){
        object.cartIcone();
    }

    public void verificarItensNoCarrinho(List<String> listIntensCart){
        for (String s : listIntensCart) {
            Assert.assertTrue("[ASSERT] - " + s + " está no carrinho!", object.verificarItenNoCarrinho(s));
        }
    }

    public void clicarBtnCheckout(){
        object.btnCheckout();
    }

    public void preencherDadosDoCheckout(){
        object.setInputCheckoutName("TESTE NOME");
        object.setInputCheckoutLastName("SOBRE NOME");
        object.setInputCheckoutCEP("55034090");
    }

    public void clicarBtnContinue(){
        object.btnCheckoutContinue();
    }

    public void clicarBtnFinish() {
        object.btnFinish();
    }

    public void validarTelaDespachoOrdem(){
        //h2[@class='complete-header'] = THANK YOU FOR YOUR ORDER
        //div[@class='complete-text'] = Your order has been dispatched, and will arrive just as fast as the pony can get there!
        driver.findElement(By.xpath("//h2[@class='complete-header']")).isDisplayed();
        driver.findElement(By.xpath("//div[@class='complete-text']")).isDisplayed();
    }

}