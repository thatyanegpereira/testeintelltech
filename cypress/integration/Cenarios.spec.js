// <reference types="Cypress" />

describe('Testes do Demo WebShop da Tricentis', function () {

    // Teste de registro e login de usuário
    context('Registro e Login de Usuário', () => {

        it('Registrar uma nova conta de usuário - Happy Path', function () {
            cy.visit('https://demowebshop.tricentis.com/register')

            cy.get('#FirstName').type('Thatyane')
            cy.get('#LastName').type('Guedes')
            cy.get('#Email').type('thatyanesgpereira@intelltech.com') // Email único para teste - O ideal seria criar uma variável dinâmica, utilizando uma biblioteca como o faker.js que gerasse o e-mail toda vez que fosse rodado, para substituir em todos os campos de e-mail e não exibir o erro de e-mail já existente, mas infelizmente não tive tanto tempo para implementar essa parte. 
            cy.get('#Password').type('password123')
            cy.get('#ConfirmPassword').type('password123')

            cy.get('input[id="register-button"]').click()

            cy.contains('Your registration completed').should('be.visible')
        })

        it('Registrar uma nova conta de usuário - Bad Path (Email duplicado)', function () {
            cy.visit('https://demowebshop.tricentis.com/register')

            cy.get('#FirstName').type('Thatyane')
            cy.get('#LastName').type('Guedes')
            cy.get('#Email').type('thatyanegpereira@intelltech.com.br') // Email já registrado
            cy.get('#Password').type('password123')
            cy.get('#ConfirmPassword').type('password123')

            cy.get('input[id="register-button"]').click()

            cy.contains('The specified email already exists').should('be.visible')
        })

        it('Fazer login com credenciais existentes - Happy Path', function () {
            cy.visit('https://demowebshop.tricentis.com/login')

            cy.get('#Email').type('thatyanegpereira@intelltech.com.br')
            cy.get('#Password').type('password123')

            cy.get('input[class="button-1 login-button"]').click()

            it('Fazer login com senha incorreta - Bad Path', function () {
                cy.visit('https://demowebshop.tricentis.com/login')

                cy.get('#Email').type('thatyanegpereira@intelltech.com.br')
                cy.get('#Password').type('wrongpassword')

                cy.get('input[type="submit"]').click()

                cy.contains('Login was unsuccessful. Please correct the errors and try again.').should('be.visible')
                cy.contains('The credentials provided are incorrect').should('be.visible')
            })

        })

        // Teste de navegação por categorias de produtos
        context('Navegação por Categorias de Produtos', function () {

            it('Navegar por diferentes categorias de produtos - Happy Path', function () {
                cy.visit('https://demowebshop.tricentis.com/')

                cy.contains('Computers').click()
                cy.contains('Computers').should('exist')

                cy.contains('Electronics').click()
                cy.contains('Electronics').should('exist')
            })

            it('Validar categoria de produtos inexistente - Bad Path', function () {
                cy.visit('https://demowebshop.tricentis.com/')

                cy.contains('Nonexistent Category').should('not.exist')
            })

        })

        // Teste de pesquisa de produtos
        context('Pesquisa de Produtos', function () {

            it('Usar a barra de pesquisa para encontrar produtos específicos - Happy Path', function () {
                cy.visit('https://demowebshop.tricentis.com/')

                cy.get('#small-searchterms').type('Fiction')

                cy.contains('Fiction').should('exist')
            })

            it('Pesquisa de produtos com termo não correspondente - Bad Path', function () {
                cy.visit('https://demowebshop.tricentis.com/')

                cy.get('#small-searchterms').type('Produto Inexistente{enter}')

                cy.contains('No products were found that matched your criteria.').should('be.visible')
            })

        })
    })
})