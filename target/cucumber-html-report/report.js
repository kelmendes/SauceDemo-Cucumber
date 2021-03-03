$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SauceDemoAddCart.feature");
formatter.feature({
  "line": 1,
  "name": "Adicionar itens ao carrinho",
  "description": "",
  "id": "adicionar-itens-ao-carrinho",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Adicionando Itens ao carrinho de compras",
  "description": "",
  "id": "adicionar-itens-ao-carrinho;adicionando-itens-ao-carrinho-de-compras",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Dado que consigo   carregar a aplicação",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Informo o nome de \"\u003cnome_user\u003e\" e \"\u003cpasswd_user\u003e\" válidos",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Clico no botão login",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Devo ser redirecionado para tela inicial do Digital",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Adiciono os itens \"\u003cnome_produto\u003e\" clicando no botão Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Acessar tela do carrinho de compras",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Validar que todos os \"\u003cnome_produto\u003e\" estão adicionados",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Então deve fechar o navegador",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "adicionar-itens-ao-carrinho;adicionando-itens-ao-carrinho-de-compras;",
  "rows": [
    {
      "cells": [
        "nome_user",
        "passwd_user",
        "nome_produto"
      ],
      "line": 26,
      "id": "adicionar-itens-ao-carrinho;adicionando-itens-ao-carrinho-de-compras;;1"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce",
        "Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red), Sauce Labs Fleece Jacket, Sauce Labs Bolt T-Shirt"
      ],
      "line": 27,
      "id": "adicionar-itens-ao-carrinho;adicionando-itens-ao-carrinho-de-compras;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Adicionando Itens ao carrinho de compras",
  "description": "",
  "id": "adicionar-itens-ao-carrinho;adicionando-itens-ao-carrinho-de-compras;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Dado que consigo   carregar a aplicação",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Informo o nome de \"performance_glitch_user\" e \"secret_sauce\" válidos",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Clico no botão login",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Devo ser redirecionado para tela inicial do Digital",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Adiciono os itens \"Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red), Sauce Labs Fleece Jacket, Sauce Labs Bolt T-Shirt\" clicando no botão Add to Cart",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Acessar tela do carrinho de compras",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Validar que todos os \"Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red), Sauce Labs Fleece Jacket, Sauce Labs Bolt T-Shirt\" estão adicionados",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Então deve fechar o navegador",
  "keyword": "Then "
});
formatter.match({
  "location": "SauceDemoLoginSteps.dado_que_consigo_carregar_a_aplicação()"
});
formatter.result({
  "duration": 5992346800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "performance_glitch_user",
      "offset": 19
    },
    {
      "val": "secret_sauce",
      "offset": 47
    }
  ],
  "location": "SauceDemoLoginSteps.informo_o_nome_de_e_válidos(String,String)"
});
formatter.result({
  "duration": 204877300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.clico_no_botao_login()"
});
formatter.result({
  "duration": 5272963800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.devo_ser_redirecionado_para_tela_inicial_do_Digital()"
});
formatter.result({
  "duration": 62273400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red), Sauce Labs Fleece Jacket, Sauce Labs Bolt T-Shirt",
      "offset": 19
    }
  ],
  "location": "SauceDemoLoginSteps.adiciono_os_itens_clicando_no_botão_Add_to_Cart(String\u003e)"
});
formatter.result({
  "duration": 1488464500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.acessar_tela_do_carrinho_de_compras()"
});
formatter.result({
  "duration": 251216600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red), Sauce Labs Fleece Jacket, Sauce Labs Bolt T-Shirt",
      "offset": 22
    }
  ],
  "location": "SauceDemoLoginSteps.validar_que_todos_os_estão_adicionados(String\u003e)"
});
formatter.result({
  "duration": 191922400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.então_deve_fechar_o_navegador()"
});
formatter.result({
  "duration": 688048800,
  "status": "passed"
});
});