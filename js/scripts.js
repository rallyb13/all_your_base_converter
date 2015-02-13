var toBase = function(numInput, baseInput) {
  var reverseInput = numInput.split("").reverse().join("");
  var newNumber = 0;
  var highBaseChars = {"a": 10, "b": 11, 12: "c", 13: "d", 14: "e", 15: "f",
                       16: "g", 17: "h", 18: "i", 19: "j"} //reversed?
  var character;

  for (var i = 0; i < reverseInput.length; ++i) {
    character = reverseInput.charAt(i);
    if (character > 9) {
      character = parseInt(highBaseChars[character]); //need to pull from object
    }
    newNumber += (Math.pow(baseInput, i) * character);
  }
  return newNumber;
};
