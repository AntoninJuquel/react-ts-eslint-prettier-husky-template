/// <reference types="cypress" />

describe('Hello world !', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1').contains('Hello world !')
  })
})
