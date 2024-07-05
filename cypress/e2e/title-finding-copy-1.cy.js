describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://seleniumpractise.blogspot.com/2016/08/bootstrap-dropdown-example-for-selenium.html')

    cy.get("#menu1").click()
    cy.wait(1000);

    cy.get("a[role='menuitem']").each(function($ele, index, list){

      //cy.log($ele.click());
      //cy.wait(1000);

      if($ele.text()==='JavaScript'){

        cy.log('found element')
        cy.wait(1000);
        cy.wrap($ele).click();
        cy.title().should('include', 'Selenium')

      }else{
        //cy.wait(1000);
        //cy.log("Current value",$ele.text() )
      }
      

    })
  })
})