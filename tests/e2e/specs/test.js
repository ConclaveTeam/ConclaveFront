describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('http://localhost:8080/test-page')
    cy.contains('button', 'testing button')
  })
})
