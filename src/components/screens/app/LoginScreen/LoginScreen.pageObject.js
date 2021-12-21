export default class LoginScreenPageObject {
  constructor (cy) {
    this.cy = cy

    this.cy.visit('/app/login')
  }

  fillLoginForm ({ name, password }) {
    this.cy.get('#formCadastro input[name="name"]').type(name)
    this.cy.get('#formCadastro input[name="password"]').type(password)

    return this
  }

  submitLoginForm () {
    this.cy.get('#formCadastro button[type="submit"]').click()

    return this
  }
}
