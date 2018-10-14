describe("Incrementer", () => {
  it(".should() - observe the incrementer", () => {
    cy.visit("http://localhost:8080")
      .get("#incrementer")
      //   .should("have.text", "ready")
      //   .should("have.text", "1")
      //   .should("have.text", "2")
      //   .should("have.text", "3")
      //   .should("have.text", "4")
      //   .should("have.text", "5")
      .get("#connection-state")
      .should("have.text", "Open")
      .get("#close-connection-button")
      .click()
      .get("#connection-state")
      .should("have.text", "Closed");
  });
});
