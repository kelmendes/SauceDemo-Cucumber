package stepdefinition.SauceDemoCart;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import models.SauceDemoCartMO;

import java.util.List;

import static utils.utils.getStrNomeProduto;

public class SauceDemoCartSteps {

    SauceDemoCartMO sauceDemoMO = new SauceDemoCartMO();

    @And("^Adiciono os itens clicando no botão Add to Cart:$")
    public void adiciono_os_itens_clicando_no_botao_Add_to_Cart(List<String> strNomeProduto){ sauceDemoMO.adicionarItensAoCarrinho(strNomeProduto); }

    @When("^O contado de itens no carrinho deve mudar$")
    public void o_contado_de_itens_no_carrinho_deve_mudar(){ sauceDemoMO.verificarContador(6); }

    @Given("^Acessar tela do carrinho de compras$")
    public void acessar_tela_do_carrinho_de_compras(){ sauceDemoMO.acessarCartdeCompras(); }

    @When("^Validar que todos os estão adicionados$")
    public void validar_que_todos_os_estao_adicionados(){ sauceDemoMO.verificarItensNoCarrinho(getStrNomeProduto()); }

    @And("^Que o usuário tenha adicionado todos os itens ao carrinho$")
    public void dado_que_usuario_adicinou_todos_os_itens_ao_carrinho(){
        sauceDemoMO.adicionarItensAoCarrinho(getStrNomeProduto());
        sauceDemoMO.verificarContador(getStrNomeProduto().size());
        sauceDemoMO.acessarCartdeCompras();
    }

    @Given("^Clico no botão de checkout$")
    public void clico_no_botao_de_checkout(){ sauceDemoMO.clicarBtnCheckout(); }

    @Given("^Informo os dados básicos para realizar o checkout$")
    public void informo_os_dados_basicos_para_realizar_o_checkout(){ sauceDemoMO.preencherDadosDoCheckout(); }

    @Given("^Clico em continuar com o checkout$")
    public void clico_em_continuar_com_o_checkout(){ sauceDemoMO.clicarBtnContinue(); }

    @Given("^valido a forma de pagamento, entrega e total da compra$")
    public void valido_a_forma_de_pagamento_entrega_e_total_da_compra(){ System.out.println("Falta Implementar"); }

    @Given("^clico em finish$")
    public void clico_em_finish(){ sauceDemoMO.clicarBtnFinish(); }

    @When("^Devo ser redirecionado para tela que minha ordem vai ser despachada$")
    public void devo_ser_redirecionado_para_tela_que_minha_ordem_vai_ser_despachada(){ sauceDemoMO.validarTelaDespachoOrdem(); }
}
