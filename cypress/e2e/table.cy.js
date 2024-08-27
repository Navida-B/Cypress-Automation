describe('traversing and asserting table', () => {

    it('traveses a table column to grab a text and asserts sibiling element', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text= $el.text();
            
            if (text.includes("Basics")) {
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price) {
                    const priceText = price.text();
                    expect(priceText).to.equal('30');
                })
            }
        })

    })

})

        
    
    
