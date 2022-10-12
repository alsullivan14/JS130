// input number
// output type of number according to aliquot sum

// explicit
// to find aliquot sum get all divisors of a number which are integers besides the number itself
// add these divisors together
// if equal to the number it is a perfect number, if more it is abundant, if less, deficient
// return appropriate string

// implicit
// throw error if number is negative
// argument will only be integer
// argument will not be zero

// data structure- number, return string

// create perfect number class
// create property for number arg on instance of class
// set up error message
// create a classify method
// - get list of divisors
// -reduce divisors
// -compare total to number
// return category

class PerfectNumber {
  constructor() {}
  
  static classify(int) {
    let number = int
    let divisors = [];
    let index = 1;
    while (index < number) {
      if (number % index === 0) {
        divisors.push(index);
      }
      index++;
    }
    let sum = divisors.reduce((curr, next) => curr + next);
    if (sum > number) {
      return 'abundant';
    } else if (sum < number) {
      return 'deficient';
    } else {
      return 'perfect';
    }
  }
}


module.exports = PerfectNumber;