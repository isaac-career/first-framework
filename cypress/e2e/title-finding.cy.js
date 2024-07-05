describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://juanfutbol.com');
    
    cy.wait(2000);
    cy.contains('LAS FAV').click();
    
    cy.wait(2000);
    cy.get('.jsx-429865930.most-read-card__data')
      .contains('Redes Sociales').click();
    
    cy.wait(2000);
    cy.get('.jsx-2250130192.btn-results.link-factory-custom-style')
      .contains('AGENDA DEPORTIVA').should('have.class', 'jsx-1339892321')
    
  })
})




// describe('buscar el titulo de trending page en Juan-futbol.com',()=>{
//   it('navegar a home page',() => {
//     cy.visit('www.juanfutbol.com');
//   })


// })