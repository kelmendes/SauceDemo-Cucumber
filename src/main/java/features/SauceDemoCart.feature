Feature: Realizar operções para validar o carrinho

    @Cart
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
            | standard_user   | secret_sauce  | Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red), Sauce Labs Fleece Jacket, Sauce Labs Bolt T-Shirt |

    @Cart
    Scenario Outline: Validando Itens ao carrinho de compras
        Given Dado que consigo   carregar a aplicação
        And Informo o nome de "<nome_user>" e "<passwd_user>" válidos
        And Clico no botão login
        And Devo ser redirecionado para tela inicial do Digital
        And Adiciono os itens "<nome_produto>" clicando no botão Add to Cart
        And Acessar tela do carrinho de compras
        When Validar que todos os "<nome_produto>" estão adicionados
        Then Então deve fechar o navegador
        Examples:
            | nome_user       | passwd_user   | nome_produto |
            | performance_glitch_user   | secret_sauce  | Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red), Sauce Labs Fleece Jacket, Sauce Labs Bolt T-Shirt |

    @Cart
    Scenario Outline: Proceder para checkout
        Given Dado que consigo   carregar a aplicação
        And Informo o nome de "<nome_user>" e "<passwd_user>" válidos
        And Clico no botão login
        And Devo ser redirecionado para tela inicial do Digital
        And Adiciono os itens "<nome_produto>" clicando no botão Add to Cart
        And Acessar tela do carrinho de compras
        And Validar que todos os "<nome_produto>" estão adicionados
        And Clico no botão de checkout
        And Informo os dados básicos para realizar o checkout
        And Clico em continuar com o checkout
        And valido a forma de pagamento, entrega e total da compra
        And clico em finish
        When Devo ser redirecionado para tela que minha ordem vai ser despachada
        Then Então deve fechar o navegador
        Examples:
            | nome_user       | passwd_user   | nome_produto |
            | performance_glitch_user   | secret_sauce  | Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red), Sauce Labs Fleece Jacket, Sauce Labs Bolt T-Shirt |



