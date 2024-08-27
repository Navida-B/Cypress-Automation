describe('Asserting Dynamic dropdown spec', () => {
    
    it('suggestiondropdown', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('[placeholder="Type to Select Countries"]').as('searchBox');
        cy.get('@searchBox').click().type('ind');
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
          if ($el.text() === "India") {
            cy.wrap($el).click();
          }
        })
        cy.get('@searchBox').should('have.value', 'India');
    
      })
    
  })
  




