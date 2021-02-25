package stepdefinition;

import com.sun.xml.internal.bind.v2.runtime.output.StAXExStreamWriterOutput;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import models.SauceDemoMO;
import org.openqa.selenium.WebDriver;

import java.util.List;

public class SauceDemoLoginSteps {

    WebDriver driver;

    SauceDemoMO sauceDemoMO = new SauceDemoMO(driver);

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
    public void devo_ser_exibido_um_alerta_que_o_esse_usuario_está_bloqueado()  {
        sauceDemoMO.alertaUsuarioBloqueado();
    }

    @Then("^Então deve fechar o navegador$")
    public void então_deve_fechar_o_navegador()  {
        sauceDemoMO.fecharBrowser();
    }

    @And("^Adiciono os itens \"([^\"]*)\" clicando no botão Add to Cart$")
    public void adiciono_os_itens_clicando_no_botão_Add_to_Cart(List<String> strNomeProduto) throws Throwable {
        sauceDemoMO.adicionarItensAoCarrinho(strNomeProduto);
    }

    @When("^O contado de itens no carrinho deve mudar$")
    public void o_contado_de_itens_no_carrinho_deve_mudar() throws Throwable {
        sauceDemoMO.verificarContador(3);
    }


}
