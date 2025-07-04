const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const PermStatusPage = require('../../e2e/pages/PermStatusPage');

Given('I am on the perm processing times page', () => {
  cy.log('Navigating to PERM processing times page...');
  PermStatusPage.visitProcessingTimesPage();
  cy.log('Successfully loaded the PERM processing times page');
});

When('I check the Analyst Review month and year', () => {
  cy.log('Verifying page content...');
  cy.get('body').should('contain', 'PERM Processing Times');
  cy.log('Found PERM Processing Times section');
});

Then('I should see {string} as the Analyst Review date', (expectedDate) => {
  cy.log(`Looking for Analyst Review date: ${expectedDate}`);
  cy.contains('Analyst Review')
    .parent('tr')
    .find('td.xl71')
    .should('have.text', expectedDate)
    .then(($el) => {
      const actualDate = $el.text();
      cy.log(`Found Analyst Review date: ${actualDate}`);
      expect(actualDate).to.equal(expectedDate);
    });
});