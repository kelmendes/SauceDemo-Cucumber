Feature: Validação do Login

  Scenario Outline: Validação do Login com usuário ativo
    Given Dado que consigo   carregar a aplicação
    And Informo o nome de "<nome_user>" e "<passwd_user>" válidos
    When Clico no botão login
    Then Devo ser redirecionado para tela inicial do Digital
    Examples:
      | nome_user       | passwd_user   |
      | standard_user   | secret_sauce  |
      | locked_out_user | secret_sauce  |