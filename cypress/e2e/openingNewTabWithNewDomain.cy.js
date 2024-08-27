describe('Handling newtab with new domain', () => {
    it('opens a new tab having new domain', () => {
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
 
         cy.get('#opentab').invoke('removeAttr', 'target').click() 
         //Note the removeAttr function of jquery removes the target html attribute and opens the new tab on the same active tab

         cy.origin('https://www.qaclickacademy.com/', () => {  //when moving from one domain to another, we use 'cy.origin()'
             cy.get('.mt-50 h3').should('contain', 'Upcoming');
             cy.get('#navbarSupportedContent a[href*="blog"]').click()
             cy.wait(10000)
             cy.get('.sumome-react-wysiwyg-close-button').click()
             cy.get('.post-343 > .wp-block-post-title > a').should('contain', 'INTERVIEW QUESTIONS');

         })

 
       })

    })

   