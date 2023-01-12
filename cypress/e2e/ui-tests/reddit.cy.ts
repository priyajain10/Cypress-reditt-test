describe('reddit.com', () => {
  beforeEach(() => {
    cy.visit('https://www.reddit.com/');
    cy.contains('Continue', { timeout: 10000 }).click();
  });

  it('should search for a subreddit and print out the top post title', () => {
    cy.get('button.MobileButton').click();
    cy.get('input[placeholder="Search Reddit"]').type('gaming{enter}');
    cy.url().should('include', 'gaming');
    cy.get('.Post.size-compact.m-redesign.ctaExperiment')
      .first()
      .then(($el) => {
        console.log($el.text());
      });
  });

  it('should log in and vote on a post', () => {
    cy.get('.TopNav__logInButton').click();
    cy.url().should('include', 'login');
    cy.get('iframe')
      .first()
      .within(() => {
        cy.get('#loginUsername').type('priyatest123');
        cy.get('#loginPassword').type('Test12345@');
        cy.get('#login-form > fieldset > div.submit > button').click();
      });
    cy.get('.s1okktje-1')
      .eq(1)
      .then(($el) => {
        if ($el.hasClass('upvoted')) {
          $el.click();
        } else {
          $el.click();
        }
      });
  });
});
