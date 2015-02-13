var toBase = function(binary) {
  var reverseInput = binary.split("").reverse().join("");
  var newNumber = 0

  for (var i = 0; i < reverseInput.length; ++i) {
// debugger;
    if (reverseInput.charAt(i) == 1) {
      newNumber += Math.pow(2, i);
    }
  }
  return newNumber;
};
