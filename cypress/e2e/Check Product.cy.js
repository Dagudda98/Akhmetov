describe('Login Test', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/') 

    cy.log('Авторизация')
    cy.get('[data-test="username"]').type('standard_user') 
    cy.get('[data-test="password"]').type('secret_sauce') 
    cy.get('[data-test="login-button"]').click() 
  })

  const products = [
    { selector: 'item-4-title-link', name: 'Sauce Labs Backpack', price: '$29.99' },
    { selector: 'item-0-title-link', name: 'Sauce Labs Bike Light', price: '$9.99' },
    { selector: 'item-1-title-link', name: 'Sauce Labs Bolt T-Shirt', price: '$15.99' },
    { selector: 'item-5-title-link', name: 'Sauce Labs Fleece Jacket', price: '$49.99' },
    { selector: 'item-2-title-link', name: 'Sauce Labs Onesie', price: '$7.99' },
    { selector: 'item-3-title-link', name: 'Test.allTheThings() T-Shirt (Red)', price: '$15.99' }
  ];

  products.forEach(product => {
    it(`should open product "${product.name}", check the title and price`, () => {
      cy.get(`[data-test="${product.selector}"]`).click()

      // Проверка названия товара
      cy.get('[data-test="inventory-item-name"]').should('have.text', product.name)

      // Проверка цены товара
      cy.get('[data-test="inventory-item-price"]').should('have.text', product.price)
      
      // Проверяем, что кнопка возврата есть, затем кликаем
      cy.get('[data-test="back-to-products"]').should('be.visible').click()
    })
  })
})