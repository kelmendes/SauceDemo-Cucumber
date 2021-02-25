Feature: Validação do Login

  Scenario Outline: Validação do Login com usuário ativo
    Given Dado que consigo   carregar a aplicação
    And Informo o nome de "<nome_user>" e "<passwd_user>" válidos
    And Clico no botão login
    When Devo ser redirecionado para tela inicial do Digital
    Then Então deve fechar o navegador
    Examples:
      | nome_user       | passwd_user   |
      | standard_user   | secret_sauce  |
      | performance_glitch_user | secret_sauce  |

  Scenario Outline: Validação do Login com usuário bloqueado
    Given Dado que consigo   carregar a aplicação
    And Informo o nome de "<nome_user>" e "<passwd_user>" válidos
    And Clico no botão login
    When Devo ser exibido um alerta que o esse usuario está bloqueado
    Then Então deve fechar o navegador
    Examples:
      | nome_user       | passwd_user   |
      | locked_out_user   | secret_sauce  |