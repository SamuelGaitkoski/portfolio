/// <reference types="cypress" />

describe('Contact form', () => {
  beforeEach(() => {
    cy.visit('/contact');
  });

  it('submits successfully when filled correctly', () => {
    // Stub the network request to prevent a real API call
    cy.intercept('POST', '/api/email/send', {
      statusCode: 200,
      body: {},
    }).as('sendEmail');

    // Fill out the form
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="subject"]').type('Hello there');
    cy.get('textarea[name="message"]').type('This is a test message');

    // Submit
    cy.get('button[type="submit"]').click();

    // Wait for the fake request
    cy.wait('@sendEmail');

    // Assert toast message (adjust selector depending on your implementation)
    cy.contains('Email sent successfully!').should('be.visible');
  });

  it('shows error toast when API fails', () => {
    cy.intercept('POST', '/api/email/send', {
      statusCode: 500,
      body: {},
    }).as('sendEmailFail');

    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="subject"]').type('Hello there');
    cy.get('textarea[name="message"]').type('This is a test message');

    cy.get('button[type="submit"]').click();

    cy.wait('@sendEmailFail');

    cy.contains('Error sending email, try again later!').should('be.visible');
  });
});
