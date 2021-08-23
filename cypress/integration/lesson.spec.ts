describe("Multiple Choice Challenge", () => {
  beforeEach(() => {
    cy.visit("/testing-your-first-application/todomvc-app-install-and-overview")
  })

  it("does not display the video hero section", () => {
    cy.getBySel("lesson-hero").should("not.exist")
  })

  it("the TOC links to the correct content section when clicked", () => {
    cy.getBySel("install").click()
    cy.window()
      .its("scrollY")
      .should("equal", Math.ceil(cy.$$("#install").offset().top))

    cy.getBySel("app-overview").click()
    cy.window()
      .its("scrollY")
      .should("equal", Math.ceil(cy.$$("#app-overview").offset().top))
  })

  it("shows the challenge", () => {
    cy.getBySel("next-lesson-button").should("exist")
  })
})

export {}