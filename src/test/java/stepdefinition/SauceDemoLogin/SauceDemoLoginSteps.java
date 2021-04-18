package stepdefinition.SauceDemoLogin;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import models.SauceDemoLoginMO;

import static utils.utils.creatCookieProdutos;

public class SauceDemoLoginSteps {

    SauceDemoLoginMO sauceDemoMO = new SauceDemoLoginMO();

    @Given("^Dado que consigo   carregar a aplicação$")
    public void dado_que_consigo_carregar_a_aplicação(){
        sauceDemoMO.abrirBrowser("https://www.saucedemo.com/");
    }

    @And("^Informo o nome de \"([^\"]*)\" e \"([^\"]*)\" válidos$")
    public void informo_o_nome_de_e_válidos(String strNome, String strPasswd){
       sauceDemoMO.login(strNome, strPasswd);
    }

    @And("^Clico no botão login$")
    public void clico_no_botao_login(){
        sauceDemoMO.clickBtnLogin();
    }

    @When("^Devo ser redirecionado para tela inicial do Digital$")
    public void devo_ser_redirecionado_para_tela_inicial_do_Digital() {
        sauceDemoMO.validarLoginHome();
    }

    @When("^Devo ser exibido um alerta que o esse usuario está bloqueado$")
    public void devo_ser_exibido_um_alerta_que_o_esse_usuario_está_bloqueado()  { sauceDemoMO.alertaUsuarioBloqueadoOUUsuarioOuSenhaErrado(); }

    @When("^Devo ser exibido um alerta que o esse usuario ou senha está errado$")
    public void devo_ser_exibido_um_alerta_que_o_esse_usuario_ou_senha_está_errado(){ sauceDemoMO.alertaUsuarioBloqueadoOUUsuarioOuSenhaErrado(); }

    @Then("^Então deve fazer logout$")
    public void então_deve_fazer_logout()  {
        sauceDemoMO.fazerLogout();
    }

}
