describe('Practice spec', () => {
   
    it('window alert', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
      cy.get('[placeholder="Enter Your Name"]').type('Firstname');
      cy.get("#alertbtn").click();
      cy.on('window:alert', (str) => {
        expect(str).to.equal("Hello Firstname, share this practice page and share your knowledge")
      })
      
      cy.get('[placeholder="Enter Your Name"]').type('name1');
      cy.get('#confirmbtn').click();
      cy.on('window:confirm', (str) => {
        expect(str).to.equal("Hello name1, Are you sure you want to confirm?")
      })
  
  
    })

})
