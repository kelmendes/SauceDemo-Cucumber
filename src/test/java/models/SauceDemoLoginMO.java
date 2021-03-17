package models;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import pageobjects.SauceDemoCartPO;
import pageobjects.SauceDemoLoginPO;
import stepdefinition.hook.Hook;

public class SauceDemoLoginMO {
    WebDriver driver;
    SauceDemoLoginPO objectLogin = new SauceDemoLoginPO();
    SauceDemoCartPO objectCart = new SauceDemoCartPO();

    public SauceDemoLoginMO() {
        this.driver = Hook.getsDrivers();
    }

    public void abrirBrowser(String urlSite){
        this.driver.get(urlSite);
    }

    public void fazerLogout() {
        driver.findElement(By.xpath(objectLogin.btnMenuLateral)).click();
        driver.findElement(By.xpath(objectLogin.btnLogoutMenuLateral)).click();
    }


    public void login (String nome, String senha){
        driver.findElement(By.xpath(objectLogin.inputUserName)).sendKeys(nome);
        driver.findElement(By.xpath(objectLogin.inputPassword)).sendKeys(senha);
    }

    public void clickBtnLogin() {
        driver.findElement(By.xpath(objectLogin.btnLogin)).click();
    }

    public void validarLoginHome() {
        driver.findElement(By.xpath(objectCart.divContainerListaDeItensHome)).isDisplayed();
    }

    public void alertaUsuarioBloqueadoOUUsuarioOuSenhaErrado() {
        driver.findElement(By.xpath(objectLogin.alertErroLogin)).isDisplayed();
    }
}
