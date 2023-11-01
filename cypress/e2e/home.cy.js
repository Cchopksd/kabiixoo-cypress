// npm run cypress:open

describe('Not a user', () => {
  it('open website', () => {

    cy.visit('https://kabiixoo-z3v6.onrender.com')
    cy.get('.wel-link-home').click()

    //test search function
    cy.get('.entry-fill').type('บางขุนเทียน')
    cy.get('.bt-search').click()
    cy.get('[href="/provider-profile/0d0a0773-b908-4916-997d-b2d1e6a5b312"]').click()

  })
  it('user search function', () => {
    cy.visit('https://kabiixoo-z3v6.onrender.com/provider-profile/0d0a0773-b908-4916-997d-b2d1e6a5b312')
    cy.get('.ps-profile-provider-chat-btn').should('be.visible')
    cy.get('.ps-profile-provider-report-btn').should('be.visible')
    cy.get('.ps-profile-provider-review-btn').should('be.visible')

  })
});