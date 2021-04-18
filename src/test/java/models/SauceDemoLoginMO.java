package models;

import org.junit.Assert;
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
        objectLogin.btnMenuLateral();
        objectLogin.btnLogoutMenuLateral();
    }


    public void login (String nome, String senha){
        objectLogin.setInputUserName(nome);
        objectLogin.setInputPassword(senha);
    }

    public void clickBtnLogin() {
        objectLogin.btnLogin();
    }

    public void validarLoginHome() {
        Assert.assertTrue("[ASSERT] - Itens da página home estão presentes!", objectCart.listaDeItensHome());
    }

    public void alertaUsuarioBloqueadoOUUsuarioOuSenhaErrado() {
        Assert.assertTrue("[ASSERT] - Alerta está pesente!", objectLogin.alertErroLogin());
    }
}
