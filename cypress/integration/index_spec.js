describe('Incrementer', () => {
	it('.should() - visit the index', () => {
		cy.visit('http://localhost:8080')
	})

	it('.should() - observe the incrementer', () => {
		cy
			.get('#incrementer')
			.should('have.text', 'ready')
			.should('have.text', '1')
			.should('have.text', '2')
			.should('have.text', '3')
			.should('have.text', '4')
			.should('have.text', '5')
	})
})
