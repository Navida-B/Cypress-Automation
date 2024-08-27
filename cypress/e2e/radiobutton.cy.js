describe('Asserting radiobutton spec', () => {
  it('radiobutton', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    // cy.get('[value="radio1"]').check("1",{force:true});
    //cy.get("[type='radio']").first().check();
    cy.get('[value="radio2"].radioButton').check("radio2", { force: true });


  })

  
})
