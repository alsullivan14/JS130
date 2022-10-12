// input a natural number and set of one or more other numbers
// output sum of all multiples in set that are less than first number

// explicit
// -use a default of 3 and 5 if set is not given
// -find all multiples of a given set of numbers less than max number
// -don't include 1 and don't use multiples that are repeated(ex. 4, 6 to 15 doesn't use the multiple 12 twice because 12 is a multiple of both 4 and 6)
// -add all multiples from this set together

// implicit
// -if number returned is greater than 999 may need to use underscore to represent comma for thousands place
// -natural numbers are positive integers

// data structure - optional set of numbers and limiting value, return number

// create a method called 'to' which will accept a limiting value as argument
// create a static method also named 'to' which defaults to 3 and 5 as numbers for computing multiples
// -use a collection to store multiples
// -loop through an index, adding all multiples to collection until limiting value is reached
//  -if multiple already exists do not add to collection again
// -compute return value of all multiples in collection

class sumOfMultiples {
  constructor(...numbers) {
    this.numbersToMultiply = numbers
  }
  
  to(maxValue) {
    let multiples = [];
    let index = Math.min(...this.numbersToMultiply);
    while (index < maxValue) {
      if (this.numbersToMultiply.find(number => index % number === 0)) {
        multiples.push(index);
      }
      index++;
    }
    return multiples.reduce((curr, next) => curr + next, 0);
  }
  
  static to(maxValue) {
    return new sumOfMultiples(3, 5).to(maxValue);
  }
}



module.exports = sumOfMultiples;