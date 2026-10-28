describe('Smoke - Logout', () => {
  it('logs out and prevents access to the inventory', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce', {
      log: false
    })
    cy.get('[data-test="login-button"]').click()

    cy.location('pathname').should('eq', '/inventory.html')
    cy.get('[data-test="inventory-item"]').should('have.length', 6)

    // Выходим через меню
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').should('be.visible').click()

    cy.location('pathname').should('eq', '/')
    cy.get('[data-test="login-button"]').should('be.visible')

    // После выхода каталог не должен быть доступен напрямую
    // Разрешаем загрузить ответ 404 и проверить перенаправление приложения
    cy.visit('https://www.saucedemo.com/inventory.html', {
      failOnStatusCode: false
    })

    cy.location('pathname').should('eq', '/')
    cy.get('[data-test="login-button"]').should('be.visible')
    cy.get('[data-test="inventory-item"]').should('not.exist')
  })
})
