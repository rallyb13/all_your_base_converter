var toBase = function(numInput, baseInput) {
  var reverseInput = numInput.split("").reverse().join("");
  var newNumber = 0;

  for (var i = 0; i < reverseInput.length; ++i) {
    newNumber += (Math.pow(baseInput, i) * reverseInput.charAt(i));
  }
  return newNumber;
};
