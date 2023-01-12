/// <reference type
import './commands';
import 'cypress-mochawesome-reporter/register';
import 'cypress-plugin-api';


declare namespace Cypress {
  interface Chainable<Subject> {
    login(selector: string, ...options: any): Chainable<JQuery<HTMLElement>>;
    getByTestId(
      selector: string,
      ...options: any
    ): Chainable<JQuery<HTMLElement>>;
    getById(selector: string, ...options: any): Chainable<JQuery<HTMLElement>>;
    findById(selector: string, ...options: any): Chainable<JQuery<HTMLElement>>;
    getByLink(
      selector: string,
      ...options: any
    ): Chainable<JQuery<HTMLElement>>;
  }
}

Cypress.Commands.add('login', (username: string, password: string) => {
  cy.visit(data.fxUrl + '/login');
  cy.get('#login-email-address-field').type(username, { log: false });
  cy.get('#login-password-field')
    .type(password, { log: false })
    .type('{enter}');
});

Cypress.Commands.add('getByTestId', (input: string) => {
  return cy.get(`[data-testid=${input}]`);
});

Cypress.Commands.add('getById', (input: string) => {
  return cy.get(`id=${input}`);
});

Cypress.Commands.add('findById', (input: string) => {
  return cy.get(`id=${input}`);
});

Cypress.Commands.add('getByLink', (label: string) => {
  if (Cypress.env('mobile')) {
    cy.get('li a').contains(label);
  } else {
    cy.get('a').contains(label);
  }
});
