describe('API tests', () => {
  it('Get-request', () => {
    cy.request('GET', 'https://httpbin.org/get').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('url', 'https://httpbin.org/get');
    });
  });

  it('Post-request', () =>{
    cy.request('POST', 'https://httpbin.org/post', {name: 'TestUser'}).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.json).to.deep.equal({name: 'TestUser'});
    });
  });
})