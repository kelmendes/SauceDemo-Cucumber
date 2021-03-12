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
  "duration": 7389864900,
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
  "name": "Então deve fazer logout",
  "keyword": "Then "
});
formatter.match({
  "location": "SauceDemoLoginSteps.dado_que_consigo_carregar_a_aplicação()"
});
formatter.result({
  "duration": 1918039800,
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
  "duration": 412995100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.clico_no_botao_login()"
});
formatter.result({
  "duration": 401925100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.devo_ser_redirecionado_para_tela_inicial_do_Digital()"
});
formatter.result({
  "duration": 150519800,
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
  "duration": 1642941700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoCartSteps.o_contado_de_itens_no_carrinho_deve_mudar()"
});
formatter.result({
  "duration": 78885400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.então_deve_fazer_logout()"
});
formatter.result({
  "duration": 623767900,
  "status": "passed"
});
formatter.after({
  "duration": 1438140200,
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
  "duration": 6402724000,
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
  "name": "Então deve fazer logout",
  "keyword": "Then "
});
formatter.match({
  "location": "SauceDemoLoginSteps.dado_que_consigo_carregar_a_aplicação()"
});
formatter.result({
  "duration": 974176600,
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
  "duration": 250985900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.clico_no_botao_login()"
});
formatter.result({
  "duration": 5381766000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.devo_ser_redirecionado_para_tela_inicial_do_Digital()"
});
formatter.result({
  "duration": 94797300,
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
  "duration": 1688250700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoCartSteps.acessar_tela_do_carrinho_de_compras()"
});
formatter.result({
  "duration": 329255500,
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
  "duration": 455925100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.então_deve_fazer_logout()"
});
formatter.result({
  "duration": 636403000,
  "status": "passed"
});
formatter.after({
  "duration": 1535177400,
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
  "duration": 6419186400,
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
  "name": "Então deve fazer logout",
  "keyword": "Then "
});
formatter.match({
  "location": "SauceDemoLoginSteps.dado_que_consigo_carregar_a_aplicação()"
});
formatter.result({
  "duration": 958645900,
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
  "duration": 201541500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.clico_no_botao_login()"
});
formatter.result({
  "duration": 5351715700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.devo_ser_redirecionado_para_tela_inicial_do_Digital()"
});
formatter.result({
  "duration": 91852300,
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
  "duration": 1708988500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoCartSteps.acessar_tela_do_carrinho_de_compras()"
});
formatter.result({
  "duration": 307705400,
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
  "duration": 506100400,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoCartSteps.clico_no_botão_de_checkout()"
});
formatter.result({
  "duration": 404332700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoCartSteps.informo_os_dados_básicos_para_realizar_o_checkout()"
});
formatter.result({
  "duration": 236644800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoCartSteps.clico_em_continuar_com_o_checkout()"
});
formatter.result({
  "duration": 309492500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoCartSteps.valido_a_forma_de_pagamento_entrega_e_total_da_compra()"
});
formatter.result({
  "duration": 125000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoCartSteps.clico_em_finish()"
});
formatter.result({
  "duration": 483161600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoCartSteps.devo_ser_redirecionado_para_tela_que_minha_ordem_vai_ser_despachada()"
});
formatter.result({
  "duration": 178697700,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.então_deve_fazer_logout()"
});
formatter.result({
  "duration": 597517800,
  "status": "passed"
});
formatter.after({
  "duration": 1259090400,
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
  "name": "Então deve fazer logout",
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
  "duration": 5782890700,
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
  "name": "Então deve fazer logout",
  "keyword": "Then "
});
formatter.match({
  "location": "SauceDemoLoginSteps.dado_que_consigo_carregar_a_aplicação()"
});
formatter.result({
  "duration": 1287478600,
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
  "duration": 409440800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.clico_no_botao_login()"
});
formatter.result({
  "duration": 358249300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.devo_ser_redirecionado_para_tela_inicial_do_Digital()"
});
formatter.result({
  "duration": 123743300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.então_deve_fazer_logout()"
});
formatter.result({
  "duration": 570050100,
  "status": "passed"
});
formatter.after({
  "duration": 1195353800,
  "status": "passed"
});
formatter.before({
  "duration": 6998775300,
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
  "name": "Então deve fazer logout",
  "keyword": "Then "
});
formatter.match({
  "location": "SauceDemoLoginSteps.dado_que_consigo_carregar_a_aplicação()"
});
formatter.result({
  "duration": 1068830000,
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
  "duration": 407086000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.clico_no_botao_login()"
});
formatter.result({
  "duration": 5324359600,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.devo_ser_redirecionado_para_tela_inicial_do_Digital()"
});
formatter.result({
  "duration": 94618000,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.então_deve_fazer_logout()"
});
formatter.result({
  "duration": 602292400,
  "status": "passed"
});
formatter.after({
  "duration": 1322809500,
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
  "name": "Então deve fazer logout",
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
  "duration": 6441187600,
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
  "name": "Então deve fazer logout",
  "keyword": "Then "
});
formatter.match({
  "location": "SauceDemoLoginSteps.dado_que_consigo_carregar_a_aplicação()"
});
formatter.result({
  "duration": 1004551300,
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
  "duration": 324637800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.clico_no_botao_login()"
});
formatter.result({
  "duration": 324502900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.devo_ser_exibido_um_alerta_que_o_esse_usuario_está_bloqueado()"
});
formatter.result({
  "duration": 96491500,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.então_deve_fazer_logout()"
});
formatter.result({
  "duration": 30079589400,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //*[@id\u003d\"react-burger-menu-btn\"]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027WINAPIHI8VDSW4P\u0027, ip: \u0027192.168.1.9\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 86.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20210222142601, moz:geckodriverVersion: 0.29.0, moz:headless: false, moz:processID: 18812, moz:profile: C:\\Users\\k.mendes.de.araujo..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 81f8b940-f3e5-40e1-b4f7-d5bb7eac5134\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"react-burger-menu-btn\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat models.SauceDemoLoginMO.fazerLogout(SauceDemoLoginMO.java:23)\r\n\tat stepdefinition.SauceDemoLogin.SauceDemoLoginSteps.então_deve_fazer_logout(SauceDemoLoginSteps.java:41)\r\n\tat ✽.Then Então deve fazer logout(SauceDemoLogin.feature:21)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1253310800,
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
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Devo ser exibido um alerta que o esse usuario ou senha está errado",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "validação-do-login;validação-do-login-com-usuário-errado;",
  "rows": [
    {
      "cells": [
        "nome_user",
        "passwd_user"
      ],
      "line": 33,
      "id": "validação-do-login;validação-do-login-com-usuário-errado;;1"
    },
    {
      "cells": [
        "locked_out_user",
        "senha_errada"
      ],
      "line": 34,
      "id": "validação-do-login;validação-do-login-com-usuário-errado;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6318009900,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
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
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Devo ser exibido um alerta que o esse usuario ou senha está errado",
  "keyword": "Then "
});
formatter.match({
  "location": "SauceDemoLoginSteps.dado_que_consigo_carregar_a_aplicação()"
});
formatter.result({
  "duration": 1525429300,
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
  "duration": 305822800,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.clico_no_botao_login()"
});
formatter.result({
  "duration": 305742200,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.devo_ser_exibido_um_alerta_que_o_esse_usuario_ou_senha_está_errado()"
});
formatter.result({
  "duration": 116334500,
  "status": "passed"
});
formatter.after({
  "duration": 1174529300,
  "status": "passed"
});
});