describe('Asserting Pagination ', () => {

    it('Traverse multiple pages to find and assert a text', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/table-pagination-demo');
        
        // cy.get('#table-id>tbody>tr').find('>td:nth-child(2)')
        //     .each(($el, index, $list) => {
        //         const text = $el.text();
        //         cy.log(`${text}`);
        //         if (text.includes('Kirsten')) {
        //             expect(text).to.equal('Kirsten');
        //             return false;
        //         }
        //     })

        cy.get('li#prev').as('next');
        cy.get('.pagination-container>nav>ul>li').then(($value) => {
            var NumberOfPages = $value.length;
            cy.log(NumberOfPages);
        })
        

            // cy.get('#table-id>tbody>tr').eq(1)
            // .each(($el, index, $list) => {
            //     const text = $el.text();
            //     //cy.log(`${text}`);
            //     if (text.includes('Kirsten')) {
            //         expect(text).to.equal('Kirsten');
            //         return;
            //     }
            //     // else {
            //     //     cy.get('@next').click();
            //     // }
            
            // })
    })

})
    
