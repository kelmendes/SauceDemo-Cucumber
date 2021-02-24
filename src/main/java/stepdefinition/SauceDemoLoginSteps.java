package stepdefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import models.SauceDemoMO;
import org.openqa.selenium.WebDriver;

public class SauceDemoLoginSteps {

    WebDriver driver;

    SauceDemoMO sauceDemoMO = new SauceDemoMO(driver);

    @Given("^Dado que consigo   carregar a aplicação$")
    public void dado_que_consigo_carregar_a_aplicação(){
        sauceDemoMO.abrirBrowser("https://www.saucedemo.com/");
    }

    @Given("^Informo o nome de \"([^\"]*)\" e \"([^\"]*)\" válidos$")
    public void informo_o_nome_de_e_válidos(String strNome, String strPasswd){
       sauceDemoMO.login(strNome, strPasswd);
    }

    @When("^Clico no botão login$")
    public void clico_no_botao_login(){
        sauceDemoMO.clickBtnLogin();
    }

    @Then("^Devo ser redirecionado para tela inicial do Digital$")
    public void devo_ser_redirecionado_para_tela_inicial_do_Digital() {
        sauceDemoMO.validarLoginHome();
        sauceDemoMO.fecharBrowser();
    }

    @Then("^Devo ser exibido um alerta que o esse usuario está bloqueado$")
    public void devo_ser_exibido_um_alerta_que_o_esse_usuario_está_bloqueado()  {
        sauceDemoMO.alertaUsuarioBloqueado();
        sauceDemoMO.fecharBrowser();
    }

}
