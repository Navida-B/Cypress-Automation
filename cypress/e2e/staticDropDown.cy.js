describe('Asserting static dropdown', () => {

    it('Asserts static dropdown', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // cy.get('select#dropdown-class-example').select('option2');
        // cy.get('select#dropdown-class-example').should('have.value', 'option2')


        //cy.get('select#dropdown-class-example').children('option').eq(1).should('contain', 'Option1');
        cy.get('select#dropdown-class-example>option').each(($el, index, $list) => {
            if ($el.text() === 'Option3') {

                // cy.get('select#dropdown-class-example').should('contain', 'Option3')
                cy.wrap($el).should('contain', 'Option3')
            } else {
                cy.log('test1');
            }
        })


    });


});