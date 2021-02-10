Feature: Validação do Login

  Scenario: Validação do Login com usuário ativo
    Given Dado que consigo carregar a aplicação
    And Informo o nome de 'standard_user' e 'secret_sauce' válidos
    When Clico no botão login
    Then Devo ser redirecionado para tela inicial do Digital
    
  Scenario: Validação do Login com usuário bloqueado
    Given Dado que consigo carregar a aplicação
    And Informo o nome de 'locked_out_user' e 'secret_sauce' válidos
    When Clico no botão login
    Then Devo ser exibido um alerta que o esse usuario está bloqueado
