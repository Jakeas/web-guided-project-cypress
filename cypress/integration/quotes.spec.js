// write tests here
describe("Quotes app", () => {
  beforeEach(() => {
    // arbitrary code we want running before our tests run
    cy.visit("http://localhost:1234");
  });
  // here go our tests
  it("sanity test to make sure tests work", () => {
    // 'expect' is an assertions
    // there can be many assertions per test
    // though inside the 'it' statement (the test),
    // usually those assertions are logically grouped together
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
    expect({}).not.to.equal({}); // not strict (==)
    expect({}).to.eql({}); // strict (===)
  });

  it("the proper elements are showing on the screen", () => {
    cy.get('input[name="text"]').should("exist");
    cy.get('input[name="foobar"]').should("not.exist");
    cy.get('input[name="author"]').should("exist");
    cy.get('button[id="submitBtn"]').should("exist");
    cy.get('button[id="cancelBtn"]').should("exist");
    cy.contains("Submit Quote");
    cy.contains(/submit quote/i);
  });

  it("can type in the inputs", () => {
    // grab the inputs
    // assert that they are empty
    // type in them
    // assert that the thing we typed is there
    cy.get('input[name="text"]')
      .should("have.value", "")
      .type("have fun learning React")
      .should("have.value", "have fun learning React");
  });
});
