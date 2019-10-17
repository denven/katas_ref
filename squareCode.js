const squareCode = function(message) {
  // Put your solution here
  // trim() method can not remove spaces in the middle of string
  message = message.replace(/\s*/g, "");
  let sqLen = Math.ceil(Math.sqrt(message.length));  //max length of each sub string

  //console.log(`total len: ${message.length}, split len: ${sqLen}`);
  const newString = [];
  for (let i = 0; i < sqLen; i++) {
    for (let j = i; j < message.length; j = j + sqLen) {
      newString.push(message[j]);
    }
    newString.push(" "); //separator
  }

  return newString.join("");
  //chi/llo/ut   //[0, 3, 6]
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
