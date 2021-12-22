/// <reference types="cypress" />

import LoginScreenPageObject from '../../../../src/components/screens/app/LoginScreen/LoginScreen.pageObject'

describe('/pages/app/login/', () => {
  describe('when fill and submit a form login request', () => {
    it('go to the profile page', () => {
      cy.intercept('http://localhost:3000/login/')// ('https://app-instalura.herokuapp.com/login')
        .as('userLogin')

      const loginScreen = new LoginScreenPageObject(cy)

      loginScreen
        .fillLoginForm({ name: 'Max Milliano', password: '123456789' })
        .submitLoginForm()

      cy.url().should('include', '/app/profile')
      cy.getCookie('LOGIN_COOKIE_APP_TOKEN')
        .should('exist')
    })
  })
})
