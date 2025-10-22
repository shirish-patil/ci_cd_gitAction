class PermStatusPage {
  // Page elements
  analystReviewDateSelector = 'td.xl71';

  // Page actions
  visitProcessingTimesPage() {
    cy.log('Visiting PERM processing times page...');
    cy.visit('https://flag.dol.gov/processingtimes', { failOnStatusCode: false });
    cy.log('Page loaded successfully');
  }

  getAnalystReviewDate() {
    cy.log('Getting Analyst Review date element...');
    return cy.get(this.analystReviewDateSelector);
  }
}

module.exports = new PermStatusPage(); 