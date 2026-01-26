describe('API tests', () => {
  it('GET request', () => {
    cy.request('GET', 'https://httpbin.org/get').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('url', 'https://httpbin.org/get');
    });
  });

  it('POST request', () => {
    cy.request('POST', 'https://httpbin.org/post', { name: 'TestUser' }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.json).to.deep.equal({ name: 'TestUser' });
    });
  });

  it('PUT request', () => {
    cy.request('PUT', 'https://httpbin.org/put', { name: 'UpdatedUser' }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.json).to.deep.equal({ name: 'UpdatedUser' });
    });
  });

  it('PATCH request', () => {
    cy.request('PATCH', 'https://httpbin.org/patch', { name: 'PatchedUser' }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.json).to.deep.equal({ name: 'PatchedUser' });
    });
  });

  it('DELETE request', () => {
    cy.request('DELETE', 'https://httpbin.org/delete').then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
