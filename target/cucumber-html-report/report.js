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
  "name": "Informo o nome de \"\u003cnome_user\u003e\" e \"\u003cpasswd_user\u003e\" válidos",
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
  "name": "Então deve fechar o navegador",
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
        "nome_user",
        "passwd_user",
        "nome_produto"
      ],
      "line": 13,
      "id": "realizar-operções-para-validar-o-carrinho;adicionando-itens-ao-carrinho-de-compras;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red), Sauce Labs Fleece Jacket, Sauce Labs Bolt T-Shirt"
      ],
      "line": 14,
      "id": "realizar-operções-para-validar-o-carrinho;adicionando-itens-ao-carrinho-de-compras;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 301000,
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
  "matchedColumns": [
    0,
    1
  ],
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
    2
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
  "name": "Então deve fechar o navegador",
  "keyword": "Then "
});
formatter.match({
  "location": "SauceDemoLoginSteps.dado_que_consigo_carregar_a_aplicação()"
});
formatter.result({
  "duration": 11052199000,
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
  "duration": 357349800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.clico_no_botao_login()"
});
formatter.result({
  "duration": 340970000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.devo_ser_redirecionado_para_tela_inicial_do_Digital()"
});
formatter.result({
  "duration": 191689600,
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
  "duration": 1759912400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.o_contado_de_itens_no_carrinho_deve_mudar()"
});
formatter.result({
  "duration": 102720400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.então_deve_fechar_o_navegador()"
});
formatter.result({
  "duration": 1812358400,
  "status": "passed"
});
formatter.after({
  "duration": 102900,
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
  "name": "Informo o nome de \"\u003cnome_user\u003e\" e \"\u003cpasswd_user\u003e\" válidos",
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
  "name": "Então deve fechar o navegador",
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
        "nome_user",
        "passwd_user",
        "nome_produto"
      ],
      "line": 27,
      "id": "realizar-operções-para-validar-o-carrinho;validando-itens-ao-carrinho-de-compras;;1"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce",
        "Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red), Sauce Labs Fleece Jacket, Sauce Labs Bolt T-Shirt"
      ],
      "line": 28,
      "id": "realizar-operções-para-validar-o-carrinho;validando-itens-ao-carrinho-de-compras;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 87000,
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
  "matchedColumns": [
    0,
    1
  ],
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
    2
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
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Então deve fechar o navegador",
  "keyword": "Then "
});
formatter.match({
  "location": "SauceDemoLoginSteps.dado_que_consigo_carregar_a_aplicação()"
});
formatter.result({
  "duration": 7592292700,
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
  "duration": 297087100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.clico_no_botao_login()"
});
formatter.result({
  "duration": 5363542600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.devo_ser_redirecionado_para_tela_inicial_do_Digital()"
});
formatter.result({
  "duration": 81623400,
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
  "duration": 1642799900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.acessar_tela_do_carrinho_de_compras()"
});
formatter.result({
  "duration": 343828600,
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
  "duration": 432242100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.então_deve_fechar_o_navegador()"
});
formatter.result({
  "duration": 1558682400,
  "status": "passed"
});
formatter.after({
  "duration": 75200,
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
  "name": "Informo o nome de \"\u003cnome_user\u003e\" e \"\u003cpasswd_user\u003e\" válidos",
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
  "name": "Então deve fechar o navegador",
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
        "nome_user",
        "passwd_user",
        "nome_produto"
      ],
      "line": 47,
      "id": "realizar-operções-para-validar-o-carrinho;proceder-para-checkout;;1"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce",
        "Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red), Sauce Labs Fleece Jacket, Sauce Labs Bolt T-Shirt"
      ],
      "line": 48,
      "id": "realizar-operções-para-validar-o-carrinho;proceder-para-checkout;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 88200,
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
  "matchedColumns": [
    0,
    1
  ],
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
    2
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
    2
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
  "name": "Então deve fechar o navegador",
  "keyword": "Then "
});
formatter.match({
  "location": "SauceDemoLoginSteps.dado_que_consigo_carregar_a_aplicação()"
});
formatter.result({
  "duration": 7113901800,
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
  "duration": 381535800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.clico_no_botao_login()"
});
formatter.result({
  "duration": 5325885900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.devo_ser_redirecionado_para_tela_inicial_do_Digital()"
});
formatter.result({
  "duration": 74066900,
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
  "duration": 1639322700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.acessar_tela_do_carrinho_de_compras()"
});
formatter.result({
  "duration": 308803300,
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
  "duration": 432642500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.clico_no_botão_de_checkout()"
});
formatter.result({
  "duration": 313447500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.informo_os_dados_básicos_para_realizar_o_checkout()"
});
formatter.result({
  "duration": 354384900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.clico_em_continuar_com_o_checkout()"
});
formatter.result({
  "duration": 321423400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.valido_a_forma_de_pagamento_entrega_e_total_da_compra()"
});
formatter.result({
  "duration": 133500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.clico_em_finish()"
});
formatter.result({
  "duration": 495171100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.devo_ser_redirecionado_para_tela_que_minha_ordem_vai_ser_despachada()"
});
formatter.result({
  "duration": 111185300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.então_deve_fechar_o_navegador()"
});
formatter.result({
  "duration": 1437778200,
  "status": "passed"
});
formatter.after({
  "duration": 83600,
  "status": "passed"
});
formatter.uri("SauceDemoLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Validação do Login",
  "description": "",
  "id": "validação-do-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Validação do Login com usuário ativo",
  "description": "",
  "id": "validação-do-login;validação-do-login-com-usuário-ativo",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
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
  "name": "Informo o nome de \"\u003cnome_user\u003e\" e \"\u003cpasswd_user\u003e\" válidos",
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
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Então deve fechar o navegador",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "validação-do-login;validação-do-login-com-usuário-ativo;",
  "rows": [
    {
      "cells": [
        "nome_user",
        "passwd_user"
      ],
      "line": 11,
      "id": "validação-do-login;validação-do-login-com-usuário-ativo;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 12,
      "id": "validação-do-login;validação-do-login-com-usuário-ativo;;2"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 13,
      "id": "validação-do-login;validação-do-login-com-usuário-ativo;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 95600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Validação do Login com usuário ativo",
  "description": "",
  "id": "validação-do-login;validação-do-login-com-usuário-ativo;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
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
  "matchedColumns": [
    0,
    1
  ],
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
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Então deve fechar o navegador",
  "keyword": "Then "
});
formatter.match({
  "location": "SauceDemoLoginSteps.dado_que_consigo_carregar_a_aplicação()"
});
formatter.result({
  "duration": 7591347300,
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
  "duration": 262531300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.clico_no_botao_login()"
});
formatter.result({
  "duration": 394792300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.devo_ser_redirecionado_para_tela_inicial_do_Digital()"
});
formatter.result({
  "duration": 82708300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.então_deve_fechar_o_navegador()"
});
formatter.result({
  "duration": 1880362400,
  "status": "passed"
});
formatter.after({
  "duration": 59400,
  "status": "passed"
});
formatter.before({
  "duration": 98100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Validação do Login com usuário ativo",
  "description": "",
  "id": "validação-do-login;validação-do-login-com-usuário-ativo;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
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
  "name": "Informo o nome de \"performance_glitch_user\" e \"secret_sauce\" válidos",
  "matchedColumns": [
    0,
    1
  ],
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
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Então deve fechar o navegador",
  "keyword": "Then "
});
formatter.match({
  "location": "SauceDemoLoginSteps.dado_que_consigo_carregar_a_aplicação()"
});
formatter.result({
  "duration": 7029263000,
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
  "duration": 321498400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.clico_no_botao_login()"
});
formatter.result({
  "duration": 5337440600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.devo_ser_redirecionado_para_tela_inicial_do_Digital()"
});
formatter.result({
  "duration": 110402800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.então_deve_fechar_o_navegador()"
});
formatter.result({
  "duration": 1552314400,
  "status": "passed"
});
formatter.after({
  "duration": 40400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Validação do Login com usuário bloqueado",
  "description": "",
  "id": "validação-do-login;validação-do-login-com-usuário-bloqueado",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Login"
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
  "name": "Devo ser exibido um alerta que o esse usuario está bloqueado",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Então deve fechar o navegador",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "validação-do-login;validação-do-login-com-usuário-bloqueado;",
  "rows": [
    {
      "cells": [
        "nome_user",
        "passwd_user"
      ],
      "line": 23,
      "id": "validação-do-login;validação-do-login-com-usuário-bloqueado;;1"
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce"
      ],
      "line": 24,
      "id": "validação-do-login;validação-do-login-com-usuário-bloqueado;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 62600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Validação do Login com usuário bloqueado",
  "description": "",
  "id": "validação-do-login;validação-do-login-com-usuário-bloqueado;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Login"
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
  "name": "Informo o nome de \"locked_out_user\" e \"secret_sauce\" válidos",
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
  "name": "Devo ser exibido um alerta que o esse usuario está bloqueado",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Então deve fechar o navegador",
  "keyword": "Then "
});
formatter.match({
  "location": "SauceDemoLoginSteps.dado_que_consigo_carregar_a_aplicação()"
});
formatter.result({
  "duration": 7151816900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "locked_out_user",
      "offset": 19
    },
    {
      "val": "secret_sauce",
      "offset": 39
    }
  ],
  "location": "SauceDemoLoginSteps.informo_o_nome_de_e_válidos(String,String)"
});
formatter.result({
  "duration": 307415900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.clico_no_botao_login()"
});
formatter.result({
  "duration": 286024400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.devo_ser_exibido_um_alerta_que_o_esse_usuario_está_bloqueado()"
});
formatter.result({
  "duration": 84645100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.então_deve_fechar_o_navegador()"
});
formatter.result({
  "duration": 1781555700,
  "status": "passed"
});
formatter.after({
  "duration": 36800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Validação do Login com usuário errado",
  "description": "",
  "id": "validação-do-login;validação-do-login-com-usuário-errado",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "Dado que consigo   carregar a aplicação",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "Informo o nome de \"\u003cnome_user\u003e\" e \"\u003cpasswd_user\u003e\" válidos",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Clico no botão login",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Devo ser exibido um alerta que o esse usuario ou senha está errado",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Então deve fechar o navegador",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "validação-do-login;validação-do-login-com-usuário-errado;",
  "rows": [
    {
      "cells": [
        "nome_user",
        "passwd_user"
      ],
      "line": 34,
      "id": "validação-do-login;validação-do-login-com-usuário-errado;;1"
    },
    {
      "cells": [
        "locked_out_user",
        "senha_errada"
      ],
      "line": 35,
      "id": "validação-do-login;validação-do-login-com-usuário-errado;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 60200,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Validação do Login com usuário errado",
  "description": "",
  "id": "validação-do-login;validação-do-login-com-usuário-errado;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "Dado que consigo   carregar a aplicação",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "Informo o nome de \"locked_out_user\" e \"senha_errada\" válidos",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Clico no botão login",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Devo ser exibido um alerta que o esse usuario ou senha está errado",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Então deve fechar o navegador",
  "keyword": "Then "
});
formatter.match({
  "location": "SauceDemoLoginSteps.dado_que_consigo_carregar_a_aplicação()"
});
formatter.result({
  "duration": 7118671400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "locked_out_user",
      "offset": 19
    },
    {
      "val": "senha_errada",
      "offset": 39
    }
  ],
  "location": "SauceDemoLoginSteps.informo_o_nome_de_e_válidos(String,String)"
});
formatter.result({
  "duration": 217407900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.clico_no_botao_login()"
});
formatter.result({
  "duration": 259090200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.devo_ser_exibido_um_alerta_que_o_esse_usuario_ou_senha_está_errado()"
});
formatter.result({
  "duration": 52984700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.então_deve_fechar_o_navegador()"
});
formatter.result({
  "duration": 1606009000,
  "status": "passed"
});
formatter.after({
  "duration": 62200,
  "status": "passed"
});
});