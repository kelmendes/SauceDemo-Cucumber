Feature: Adicionar itens ao carrinho
  @Test
  Scenario Outline: Adicionando Itens ao carrinho de compras
    Given Dado que consigo   carregar a aplicação
    And Informo o nome de "<nome_user>" e "<passwd_user>" válidos
    And Clico no botão login
    And Devo ser redirecionado para tela inicial do Digital
    And Adiciono os itens "<nome_produto>" clicando no botão Add to Cart
    When O contado de itens no carrinho deve mudar
    Then Então deve fechar o navegador
    Examples:
      | nome_user       | passwd_user   | nome_produto |
      | standard_user   | secret_sauce  | Sauce Labs Backpack, Sauce Labs Fleece Jacket, Sauce Labs Bolt T-Shirt |
