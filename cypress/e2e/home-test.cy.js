describe('Home component', () => {
    beforeEach(() => {
        cy.visit('/') // Load home page
    })

    it ('Should have Todolist h1 title', () => {
        cy.contains('h1', 'Todolist').should('be.visible')
    })

    it(`Should open a modal when button is clicked`, () => {
        const button = cy.get('.button-bar button:nth-child(1)')
        
        cy.get('#outer-modal').should('not.exist')

        // Trigger the click on the button
        button.click()


        cy.get('#outer-modal', {timeout: 2000})
            .should('exist')
            .and('be.visible')
    })
})