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
    public void informo_o_nome_de_e_válidos(String arg1, String arg2) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @When("^Clico no botão login$")
    public void clico_no_botao_login(){
        System.out.println("clico_no_botao_login");
    }

    @Then("^Devo ser redirecionado para tela inicial do Digital$")
    public void devo_ser_redirecionado_para_tela_inicial_do_Digital() {
        System.out.println("devo_ser_redirecionado_para_tela_inicial_do_Digital");
    }

    @Given("^Informo o nome de 'locked_out_user' e 'secret_sauce' válidos$")
    public void informo_o_nome_de_locked_out_user_e_secret_sauce_validos() {
        System.out.println("informo_o_nome_de_locked_out_user_e_secret_sauce_validos");
    }

}
