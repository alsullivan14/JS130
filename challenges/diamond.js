// input letter
// ouput string of letters in shape of diamond

// explicit
// all rows except first and last have two identical letters
// first and last row always contain "A"
// diamond is both horizontally and vertically symetrical
// top half has letters in descending order, bottom half in ascending order

// implicit
// number of spaces + letters on each line is equal to largest index + 1 of the last letter in alphabet
// each string of spaces/letters output on new line
// input will be capital letter
// when last letter in alphabet is reached, order switches to ascending

// data structure -string, return string

// create make diamond method
// -method to use constant length for each line
//  -find length of lines using index of letter argument in static alphabet prop x2 + 1 and save in variable
//  -is length always odd since "A" must be at the center of each diamonds first line?
// -iterate over alphabet until argument is reached
//  -update the values of sides and middle of line on each iteration(using helper method)
//  -push each line to an array for reverse output of lines
//  -return current line

// iterate over alphabet until argument is reached
// -for loop, index set to 0, while index less than length of lines, increment index
//  -can I start with the "A" line without starting at index 1
//   -yes if first line is created within for loop and special case handled for line "A"



class Diamond {
  static alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  static makeDiamond(letter) {
    let lengthOfLines = (Diamond.alphabet.indexOf(letter) * 2) + 1;
    let previousOutput = [];
    let resultString;
    
    if (letter === "A") {
      return "A\n";
    } else {
      for (let index = 0; index < lengthOfLines / 2; index++) {
      
      let line = Diamond.createLine(index, lengthOfLines);
      
      previousOutput.push(line);
      }
      resultString = previousOutput.join('') + previousOutput.slice(0, [previousOutput.length - 1]).reverse().join('');
      return resultString;
    };

  }
  
  static createLine(currentIndex, length) {
    let line;
    let sides;
    if (currentIndex === 0) {
      sides = (length - 1) / 2;
      line = " ".repeat(sides) + Diamond.alphabet[currentIndex] + " ".repeat(sides) + "\n";
      return line;
    } else if (currentIndex === 1) {
      sides = ((length - 1) / 2) - currentIndex;
      line = " ".repeat(sides) + Diamond.alphabet[currentIndex] + " " + Diamond.alphabet[currentIndex] + " ".repeat(sides) + "\n";
      return line;
    } else {
      sides = ((length - 1) / 2) - currentIndex;
      let middle = ((currentIndex - 1) * 2) + 1;
      line = " ".repeat(sides) + Diamond.alphabet[currentIndex] + " ".repeat(middle) + Diamond.alphabet[currentIndex] + " ".repeat(sides) + "\n";
      return line;
    }
  }
}

//Diamond.makeDiamond("A");
//Diamond.makeDiamond("B");
//Diamond.makeDiamond("E");

module.exports = Diamond;