$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SauceDemoCart.feature");
formatter.feature({
  "line": 1,
  "name": "Realizar operções para validar o carrinho",
  "description": "",
  "id": "realizar-operções-para-validar-o-carrinho",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Adicionando Itens ao carrinho de compras",
  "description": "",
  "id": "realizar-operções-para-validar-o-carrinho;adicionando-itens-ao-carrinho-de-compras",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Cart"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Dado que consigo   carregar a aplicação",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Informo o nome de \"standard_user\" e \"secret_sauce\" válidos",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Clico no botão login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Devo ser redirecionado para tela inicial do Digital",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Adiciono os itens \"\u003cnome_produto\u003e\" clicando no botão Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "O contado de itens no carrinho deve mudar",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Então deve fazer logout",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "realizar-operções-para-validar-o-carrinho;adicionando-itens-ao-carrinho-de-compras;",
  "rows": [
    {
      "cells": [
        "nome_produto"
      ],
      "line": 13,
      "id": "realizar-operções-para-validar-o-carrinho;adicionando-itens-ao-carrinho-de-compras;;1"
    },
    {
      "cells": [
        "Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red), Sauce Labs Fleece Jacket, Sauce Labs Bolt T-Shirt"
      ],
      "line": 14,
      "id": "realizar-operções-para-validar-o-carrinho;adicionando-itens-ao-carrinho-de-compras;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7696017400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Adicionando Itens ao carrinho de compras",
  "description": "",
  "id": "realizar-operções-para-validar-o-carrinho;adicionando-itens-ao-carrinho-de-compras;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Cart"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Dado que consigo   carregar a aplicação",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Informo o nome de \"standard_user\" e \"secret_sauce\" válidos",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Clico no botão login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Devo ser redirecionado para tela inicial do Digital",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Adiciono os itens \"Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red), Sauce Labs Fleece Jacket, Sauce Labs Bolt T-Shirt\" clicando no botão Add to Cart",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "O contado de itens no carrinho deve mudar",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Então deve fazer logout",
  "keyword": "Then "
});
formatter.match({
  "location": "SauceDemoLoginSteps.dado_que_consigo_carregar_a_aplicação()"
});
formatter.result({
  "duration": 1171177000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 19
    },
    {
      "val": "secret_sauce",
      "offset": 37
    }
  ],
  "location": "SauceDemoLoginSteps.informo_o_nome_de_e_válidos(String,String)"
});
formatter.result({
  "duration": 264408100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.clico_no_botao_login()"
});
formatter.result({
  "duration": 444442300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.devo_ser_redirecionado_para_tela_inicial_do_Digital()"
});
formatter.result({
  "duration": 143901100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red), Sauce Labs Fleece Jacket, Sauce Labs Bolt T-Shirt",
      "offset": 19
    }
  ],
  "location": "SauceDemoCartSteps.adiciono_os_itens_clicando_no_botão_Add_to_Cart(String\u003e)"
});
formatter.result({
  "duration": 1695129200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoCartSteps.o_contado_de_itens_no_carrinho_deve_mudar()"
});
formatter.result({
  "duration": 70533900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.então_deve_fazer_logout()"
});
formatter.result({
  "duration": 609141200,
  "status": "passed"
});
formatter.after({
  "duration": 1224013800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Validando Itens ao carrinho de compras",
  "description": "",
  "id": "realizar-operções-para-validar-o-carrinho;validando-itens-ao-carrinho-de-compras",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Cart"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Dado que consigo   carregar a aplicação",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Informo o nome de \"performance_glitch_user\" e \"secret_sauce\" válidos",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Clico no botão login",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Devo ser redirecionado para tela inicial do Digital",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Adiciono os itens \"\u003cnome_produto\u003e\" clicando no botão Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Acessar tela do carrinho de compras",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Validar que todos os \"\u003cnome_produto\u003e\" estão adicionados",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Então deve fazer logout",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "realizar-operções-para-validar-o-carrinho;validando-itens-ao-carrinho-de-compras;",
  "rows": [
    {
      "cells": [
        "nome_produto"
      ],
      "line": 27,
      "id": "realizar-operções-para-validar-o-carrinho;validando-itens-ao-carrinho-de-compras;;1"
    },
    {
      "cells": [
        "Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red), Sauce Labs Fleece Jacket, Sauce Labs Bolt T-Shirt"
      ],
      "line": 28,
      "id": "realizar-operções-para-validar-o-carrinho;validando-itens-ao-carrinho-de-compras;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6408983700,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Validando Itens ao carrinho de compras",
  "description": "",
  "id": "realizar-operções-para-validar-o-carrinho;validando-itens-ao-carrinho-de-compras;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Cart"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Dado que consigo   carregar a aplicação",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Informo o nome de \"performance_glitch_user\" e \"secret_sauce\" válidos",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Clico no botão login",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Devo ser redirecionado para tela inicial do Digital",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Adiciono os itens \"Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red), Sauce Labs Fleece Jacket, Sauce Labs Bolt T-Shirt\" clicando no botão Add to Cart",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Acessar tela do carrinho de compras",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Validar que todos os \"Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red), Sauce Labs Fleece Jacket, Sauce Labs Bolt T-Shirt\" estão adicionados",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Então deve fazer logout",
  "keyword": "Then "
});
formatter.match({
  "location": "SauceDemoLoginSteps.dado_que_consigo_carregar_a_aplicação()"
});
formatter.result({
  "duration": 1133523200,
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
  "duration": 449157200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.clico_no_botao_login()"
});
formatter.result({
  "duration": 5331286600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.devo_ser_redirecionado_para_tela_inicial_do_Digital()"
});
formatter.result({
  "duration": 98440600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red), Sauce Labs Fleece Jacket, Sauce Labs Bolt T-Shirt",
      "offset": 19
    }
  ],
  "location": "SauceDemoCartSteps.adiciono_os_itens_clicando_no_botão_Add_to_Cart(String\u003e)"
});
formatter.result({
  "duration": 1722946500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoCartSteps.acessar_tela_do_carrinho_de_compras()"
});
formatter.result({
  "duration": 313562500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red), Sauce Labs Fleece Jacket, Sauce Labs Bolt T-Shirt",
      "offset": 22
    }
  ],
  "location": "SauceDemoCartSteps.validar_que_todos_os_estão_adicionados(String\u003e)"
});
formatter.result({
  "duration": 432483200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.então_deve_fazer_logout()"
});
formatter.result({
  "duration": 595323900,
  "status": "passed"
});
formatter.after({
  "duration": 1174241700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Proceder para checkout",
  "description": "",
  "id": "realizar-operções-para-validar-o-carrinho;proceder-para-checkout",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@Cart"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "Dado que consigo   carregar a aplicação",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Informo o nome de \"performance_glitch_user\" e \"secret_sauce\" válidos",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Clico no botão login",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Devo ser redirecionado para tela inicial do Digital",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Adiciono os itens \"\u003cnome_produto\u003e\" clicando no botão Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Acessar tela do carrinho de compras",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Validar que todos os \"\u003cnome_produto\u003e\" estão adicionados",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Clico no botão de checkout",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Informo os dados básicos para realizar o checkout",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Clico em continuar com o checkout",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "valido a forma de pagamento, entrega e total da compra",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "clico em finish",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Devo ser redirecionado para tela que minha ordem vai ser despachada",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Então deve fazer logout",
  "keyword": "Then "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "realizar-operções-para-validar-o-carrinho;proceder-para-checkout;",
  "rows": [
    {
      "cells": [
        "nome_produto"
      ],
      "line": 47,
      "id": "realizar-operções-para-validar-o-carrinho;proceder-para-checkout;;1"
    },
    {
      "cells": [
        "Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red), Sauce Labs Fleece Jacket, Sauce Labs Bolt T-Shirt"
      ],
      "line": 48,
      "id": "realizar-operções-para-validar-o-carrinho;proceder-para-checkout;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6417413800,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Proceder para checkout",
  "description": "",
  "id": "realizar-operções-para-validar-o-carrinho;proceder-para-checkout;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@Cart"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "Dado que consigo   carregar a aplicação",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Informo o nome de \"performance_glitch_user\" e \"secret_sauce\" válidos",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Clico no botão login",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Devo ser redirecionado para tela inicial do Digital",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Adiciono os itens \"Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red), Sauce Labs Fleece Jacket, Sauce Labs Bolt T-Shirt\" clicando no botão Add to Cart",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Acessar tela do carrinho de compras",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Validar que todos os \"Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red), Sauce Labs Fleece Jacket, Sauce Labs Bolt T-Shirt\" estão adicionados",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Clico no botão de checkout",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Informo os dados básicos para realizar o checkout",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Clico em continuar com o checkout",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "valido a forma de pagamento, entrega e total da compra",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "clico em finish",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Devo ser redirecionado para tela que minha ordem vai ser despachada",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Então deve fazer logout",
  "keyword": "Then "
});
formatter.match({
  "location": "SauceDemoLoginSteps.dado_que_consigo_carregar_a_aplicação()"
});
formatter.result({
  "duration": 932693700,
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
  "duration": 539851300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.clico_no_botao_login()"
});
formatter.result({
  "duration": 5354029100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.devo_ser_redirecionado_para_tela_inicial_do_Digital()"
});
formatter.result({
  "duration": 97718600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red), Sauce Labs Fleece Jacket, Sauce Labs Bolt T-Shirt",
      "offset": 19
    }
  ],
  "location": "SauceDemoCartSteps.adiciono_os_itens_clicando_no_botão_Add_to_Cart(String\u003e)"
});
formatter.result({
  "duration": 1691062200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoCartSteps.acessar_tela_do_carrinho_de_compras()"
});
formatter.result({
  "duration": 321797500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red), Sauce Labs Fleece Jacket, Sauce Labs Bolt T-Shirt",
      "offset": 22
    }
  ],
  "location": "SauceDemoCartSteps.validar_que_todos_os_estão_adicionados(String\u003e)"
});
formatter.result({
  "duration": 560592000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoCartSteps.clico_no_botão_de_checkout()"
});
formatter.result({
  "duration": 348650700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoCartSteps.informo_os_dados_básicos_para_realizar_o_checkout()"
});
formatter.result({
  "duration": 444118000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoCartSteps.clico_em_continuar_com_o_checkout()"
});
formatter.result({
  "duration": 364288900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoCartSteps.valido_a_forma_de_pagamento_entrega_e_total_da_compra()"
});
formatter.result({
  "duration": 286100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoCartSteps.clico_em_finish()"
});
formatter.result({
  "duration": 465506300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoCartSteps.devo_ser_redirecionado_para_tela_que_minha_ordem_vai_ser_despachada()"
});
formatter.result({
  "duration": 186975400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.então_deve_fazer_logout()"
});
formatter.result({
  "duration": 601297800,
  "status": "passed"
});
formatter.after({
  "duration": 1566153400,
  "status": "passed"
});
});