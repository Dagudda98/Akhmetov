describe('Shopping cart - remove product', () => {
  it('removes the product and resets the cart state', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce', {
      log: false
    })
    cy.get('[data-test="login-button"]').click()

    cy.location('pathname').should('eq', '/inventory.html')

    // Добавляем товар и проверяем счётчик
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')

    // Проверяем наличие товара в корзине
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.location('pathname').should('eq', '/cart.html')
    cy.get('[data-test="inventory-item-name"]')
      .should('have.length', 1)
      .and('have.text', 'Sauce Labs Backpack')

    // Удаляем товар
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="inventory-item-name"]').should('not.exist')
    cy.get('[data-test="shopping-cart-badge"]').should('not.exist')

    // Проверяем состояние товара в каталоге
    cy.get('[data-test="continue-shopping"]').click()
    cy.location('pathname').should('eq', '/inventory.html')
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .should('be.visible')
      .and('have.text', 'Add to cart')
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('not.exist')
    cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
  })
})
