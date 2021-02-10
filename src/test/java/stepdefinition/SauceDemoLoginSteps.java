package stepdefinition;

import org.openqa.selenium.WebDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pageobject.SauceDemoLoginPO;

public class SauceDemoLoginSteps {
	
	WebDriver driver;

	SauceDemoLoginPO sauceDemoPO = new SauceDemoLoginPO(driver);
	    
	@Given("Dado que consigo carregar a aplicação")
	public void dado_que_consigo_carregar_a_aplicacao() {
	    sauceDemoPO.abrirBrowser("https://www.saucedemo.com/");
	}
	
	@Given("Informo o nome de {string} e {string} válidos")
	public void informo_o_nome_de_e_válidos(String string, String string2) {
	    sauceDemoPO.login(	string, string2);
	}

	@When("Clico no botão login")
	public void clico_no_botao_login() {
		sauceDemoPO.clickBtnLogin();
	}

	@Then("Devo ser redirecionado para tela inicial do Digital")
	public void devo_ser_redirecionado_para_tela_inicial_do_digital() {
	    sauceDemoPO.validarLoginHome();
	    sauceDemoPO.fecharBrowser();
	}
	
	@Then("Devo ser exibido um alerta que o esse usuario está bloqueado")
	public void devo_ser_exibido_um_alerta_que_o_esse_usuario_esta_bloqueado() {
	    sauceDemoPO.alertaUsuarioBloqueado();
	    sauceDemoPO.fecharBrowser();
	}
}
