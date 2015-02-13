describe ("toBase", function() {
  it("will recognize that 11 in binary is only 3", function() {
    expect(toBase("10", 2)).to.equal(2);
  });

  it("will convert multi-place number", function() {
    expect(toBase("10101", 2)).to.equal(21);
  });

  it("will convert a number from another base", function() {
    expect(toBase("1210", 3)).to.equal(48);
  });
});
