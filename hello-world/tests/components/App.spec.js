/// <reference types="cypress" />
import { mount } from '@cypress/vue'
import App from '@/App.vue'


describe('App', () => {
  it('works', () => {
    mount(App)
    cy.contains('h3', 'Essential Links')
      .next().find('li').should('have.length', 5)
  })
})