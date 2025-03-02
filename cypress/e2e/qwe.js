describe('Login Test', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/') 

    cy.log('Авторизация')
    cy.get('[data-test="username"]').type('standard_user') 
    cy.get('[data-test="password"]').type('secret_sauce') 
    cy.get('[data-test="login-button"]').click() 
  })
  it('Проверяет, что ссылки ведут на правильные страницы', () => {
    cy.wait(2000);
    cy.get('[data-test="social-twitter"]').should('have.attr',  'href', 'https://twitter.com/saucelabs');
    cy.wait(2000);
    cy.get('[data-test="social-facebook"]').should('have.attr', 'href', 'https://www.facebook.com/saucelabs');
    cy.wait(2000);
    cy.get('[data-test="social-linkedin"]').should('have.attr', 'href', 'https://www.linkedin.com/company/sauce-labs/');
    
  });
});