/// <reference types="cypress" />

import LoginScreenPageObject from '../../../../src/components/screens/app/LoginScreen/LoginScreen.pageObject'

describe('/pages/app/login/', () => {
  describe('when fill and submit a form login request', () => {
    it('go to the profile page', () => {
      cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login')
        .as('userLogin')

      const loginScreen = new LoginScreenPageObject(cy)

      loginScreen
        .fillLoginForm({ user: 'omariosouto', password: 'senhasegura' })
        .submitLoginForm()

      cy.url().should('include', '/app/profile')
      cy.getCookie('LOGIN_COOKIE_APP_TOKEN')
        .should('exist')
    })
  })
})
