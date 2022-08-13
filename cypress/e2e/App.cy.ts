describe('Hello world !', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('p').contains('Hello world !')
  })
})
