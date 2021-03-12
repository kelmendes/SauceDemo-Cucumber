Feature: Validação do Login

    @Login
    Scenario Outline: Validação do Login com usuário ativo
        Given Dado que consigo   carregar a aplicação
        And Informo o nome de "<nome_user>" e "<passwd_user>" válidos
        And Clico no botão login
        When Devo ser redirecionado para tela inicial do Digital
        Then Então deve fazer logout
        Examples:
            | nome_user       | passwd_user   |
            | standard_user   | secret_sauce  |
            | performance_glitch_user | secret_sauce  |

    @Login
    Scenario Outline: Validação do Login com usuário bloqueado
        Given Dado que consigo   carregar a aplicação
        And Informo o nome de "<nome_user>" e "<passwd_user>" válidos
        When Clico no botão login
        Then Devo ser exibido um alerta que o esse usuario está bloqueado
        Examples:
            | nome_user       | passwd_user   |
            | locked_out_user   | secret_sauce  |

    @Login
    Scenario Outline: Validação do Login com usuário errado
        Given Dado que consigo   carregar a aplicação
        And Informo o nome de "<nome_user>" e "<passwd_user>" válidos
        When Clico no botão login
        Then Devo ser exibido um alerta que o esse usuario ou senha está errado
        Examples:
            | nome_user       | passwd_user   |
            | locked_out_user   | senha_errada  |