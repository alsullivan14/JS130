// input number
// output roman numeral

// explicit
// -convert decimal (integers) numbers to roman numerals
// -using letters "I", "V", "X", "L", "C", "D", "M"
// -^ denotes 1, 5, 10, 50, 100, 500, 1000
// -digits which are zero are not given roman numeral
// -numbers higher than 3000 are not calculated

// implicit
// -digits expressed right to left
// -using above list numeral can be used up to three times after another numeral to signify anotherNumeral + numeral(x3) or before anotherNumeral - numeral

// data structure - number, return string

// create RomanNumeral class
// -class has toRoman method
// -store roman numerals in collection
//  -isolate and convert each digit
//   -create a clean number helper function so that number is evenly divisible by 10 until the number is less than 10
//  -add converted digit to a running total
// -return total

// store integer argument as a property on instances of Roman Numeral class

// store roman numerals in collection
// -use array with roman numeral objects, roman numeral as key and integer as value

// toRoman method
// -use string to hold roman numerals values

// cleanNumber method
// -divide number by 10 until number is less than 10
// -store number of divisions in count variable
// return (number rounded down) times 10 to the power of count

// isolate and convert digit
// -loop through each entry in collection in descending order
//  -compare each number to numeric value in collection
//  -if number is zero, skip
//  -if number is greater than current number, conversion
//   -REWRITE
//   -
//  - else if number is equal to current number

// add converted digit from previous step^ to string

// subtract number from original argument and repeat


class RomanNumeral {
  static ROMAN_NUMERALS = {
     M: 1000,
    CM: 900,
     D: 500,
    CD: 400,
     C: 100,
    XC: 90,
     L: 50,
    XL: 40,
     X: 10,
    IX: 9,
     V: 5,
    IV: 4,
     I: 1
  }

  constructor(number) {
    this.number = number;
  }

  toRoman() {
    let romanVersion = '';
    let toConvert = this.number;

    Object.keys(RomanNumeral.ROMAN_NUMERALS).forEach(numeral => {
      let value = RomanNumeral.ROMAN_NUMERALS[numeral];
      let multiplier = Math.floor(toConvert / value);
      let remainder = toConvert % value;

      if (multiplier > 0) {
        romanVersion += (numeral.repeat(multiplier));
      }

      toConvert = remainder;
    });

    return romanVersion;
  }
}

module.exports = RomanNumeral;