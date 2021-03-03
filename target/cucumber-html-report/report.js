$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SauceDemoLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Validação do Login",
  "description": "",
  "id": "validação-do-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Validação do Login com usuário bloqueado",
  "description": "",
  "id": "validação-do-login;validação-do-login-com-usuário-bloqueado",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Dado que consigo   carregar a aplicação",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Informo o nome de \"\u003cnome_user\u003e\" e \"\u003cpasswd_user\u003e\" válidos",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Clico no botão login",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Devo ser exibido um alerta que o esse usuario está bloqueado",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Então deve fechar o navegador",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "validação-do-login;validação-do-login-com-usuário-bloqueado;",
  "rows": [
    {
      "cells": [
        "nome_user",
        "passwd_user"
      ],
      "line": 21,
      "id": "validação-do-login;validação-do-login-com-usuário-bloqueado;;1"
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce"
      ],
      "line": 22,
      "id": "validação-do-login;validação-do-login-com-usuário-bloqueado;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Validação do Login com usuário bloqueado",
  "description": "",
  "id": "validação-do-login;validação-do-login-com-usuário-bloqueado;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Dado que consigo   carregar a aplicação",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Informo o nome de \"locked_out_user\" e \"secret_sauce\" válidos",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Clico no botão login",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Devo ser exibido um alerta que o esse usuario está bloqueado",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Então deve fechar o navegador",
  "keyword": "Then "
});
formatter.match({
  "location": "SauceDemoLoginSteps.dado_que_consigo_carregar_a_aplicação()"
});
formatter.result({
  "duration": 5775287800,
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
  "duration": 162246100,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.clico_no_botao_login()"
});
formatter.result({
  "duration": 258810900,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.devo_ser_exibido_um_alerta_que_o_esse_usuario_está_bloqueado()"
});
formatter.result({
  "duration": 82952300,
  "status": "passed"
});
formatter.match({
  "location": "SauceDemoLoginSteps.então_deve_fechar_o_navegador()"
});
formatter.result({
  "duration": 705068700,
  "status": "passed"
});
});