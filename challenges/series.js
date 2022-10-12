// Input string 
// Output arrays of all possible unique series

// Explicit
// -using a number, and a string of digits, 
//  find possible substrings that are unique and less than input number in length
// -if number is greater than length of string throw error

// Implicit
// -Create a class with str as input
// -create slices method which returns unique arrays of substrings
// -slices takes a number as an argument
//  -method starts at first index of str and moves left to right
// slices is instance method of series objects

// data structure - number, return array of array(s)

// create str input as property of a series instance object 
// create slices method
// return array from slices method

// slices takes number as input
// -use an array to hold subarray values
// -loop through string(start index at zero, until str.length - 1 is reached, increment by 1 each time)
//  -use a slice of original str to find substring for each iteration
//  -convert slice to digits in array
//  -push each subarray to results array


class Series {
  constructor(str) {
    this.stringDigits = str;
  }
  
  slices(num) {
    let subArrays = [];
    if (num > this.stringDigits.length) {
      throw Error("Cannot use larger number than string length");
    }
    
    for (let index = 0; index < (this.stringDigits.length + 1) - num; index++) {
      let slice = this.stringDigits.slice(index, index + num);
      let numbify = slice.split("").map(char => parseInt(char, 10));
      subArrays.push(numbify);
    }
    return subArrays;
  }
}

let myseries = new Series('01234')
myseries.slices(1)

let nother = new Series('98273463')
nother.slices(2)


module.exports = Series;