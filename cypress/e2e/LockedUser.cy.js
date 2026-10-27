describe('MAT - Locked user', () => {
  it('rejects login for a locked user', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce', {
      log: false
    })
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Sorry, this user has been locked out.')

    cy.location('pathname').should('eq', '/')
    cy.get('[data-test="login-button"]').should('be.visible')
    cy.get('[data-test="inventory-item"]').should('not.exist')
  })
})
