/// <reference types="cypress" />
import { mount } from '@cypress/vue'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders the component with a default name', () => {
    mount(HelloWorld)

    // now we can use any Cypress command to interact with the component
    // https://on.cypress.io/api
    cy.get('[data-testid=heading]').should('exist').and('contain', 'Hello World')
  })

  it('renders the name passed in', () => {
    const name = 'World'
    mount(HelloWorld, {
      propsData: {
        name
      }
    })

    cy.get('[data-testid=heading]').should('contain', `Hello ${name}`)
  })
})
