describe('Asserting checkboxes', () => {

    it('assert chcekbox', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // cy.get('#checkbox-example #checkBoxOption1').check();
        // cy.get('#checkbox-example #checkBoxOption1').uncheck();

        cy.get('#checkBoxOption3').check("Option3", {force:true});
        
        
    });
    
});