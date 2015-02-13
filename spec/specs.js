describe ("toBase", function() {
  it("will recognize that 11 in binary is only 3", function() {
    expect(toBase("10")).to.equal(2);
  });

  it("will convert multi-place number", function() {
    expect(toBase("10101")).to.equal(21);
  });
});
