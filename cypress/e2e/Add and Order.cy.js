describe('Login Test', () => {
  it('should log in with valid credentials', () => {
    cy.visit('https://www.saucedemo.com/') 

  cy.log('Авторизация')
  cy.get('[data-test="username"]').type('standard_user') 
  cy.get('[data-test="password"]').type('secret_sauce') 
  cy.get('[data-test="login-button"]').click() 
 
  cy.log('Добавление товара')
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

  cy.log('Переход в корзину и оформление')
  cy.get('[data-test="shopping-cart-link"]').click()
  cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
  cy.get('[data-test="checkout"]').click()

  cy.log('Заполнение данных для покупки')
  cy.get('[data-test="firstName"]').type('test')
  cy.get('[data-test="lastName"]').type('test2')
  cy.get('[data-test="postalCode"]').type('140000')

  cy.log('Завершаем заказ')
  cy.get('[data-test="continue"]').click()
  cy.get('[data-test="finish"]').click()
  cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!')
})
})