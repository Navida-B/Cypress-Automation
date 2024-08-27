describe('Finding and asserting textbox', () => {
       
  it('finding and asserting textbox from local html file', () => {
        cy.visit('webpage1.html')
        cy.get('#text-input').type('test1')
        cy.get('#text-input').should('have.value', 'test1')
   })

  it('Asserting textbox on a webpage', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
      cy.get('.pull-right #name').as('textbox').click().type('fname');
      cy.get('.pull-right #name').should('have.value', 'fname');
      
  });

})
