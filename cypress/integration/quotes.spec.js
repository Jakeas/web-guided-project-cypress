// write tests here
describe("Quotes app", () => {
  beforeEach(() => {
    // arbitrary code we want running before our tests run
    cy.visit("http://localhost:1234");
  });
  // here go our tests
  it("sanity test to make sure tests work", () => {
    expect(1 + 2).to.equal(3);
  });
});
