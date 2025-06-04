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

Given('I am on the perm status check page', () => {
  cy.log('Navigating to perm status check page...');
  PermStatusPage.visitCaseStatusCheckPage();
  cy.log('Successfully loaded perm status check page');
});

When('I enter a valid application number', () => {
  cy.log('Entering valid application number...');
  PermStatusPage.enterApplicationNumber('G-100-24179-153301');
  cy.log('Application number entered successfully');
});

When('I click on the check box for reCAPTCHA', () => {
  cy.log('Clicking check status button...');
  PermStatusPage.clickCheckBox();
  cy.log('Check status button clicked');
});

Then('I should see the current status of my application', () => {
  cy.log('Verifying application status...');
  PermStatusPage.getStatusResult()
    .should('be.visible')
    .and('contain', 'Status:');
  cy.log('Application status verified successfully');
});

Then('I should see the last updated date', () => {
  cy.log('Verifying last updated date...');
  PermStatusPage.getLastUpdatedDate()
    .should('be.visible')
    .and('contain', 'Last Updated:');
  cy.log('Last updated date verified successfully');
}); 