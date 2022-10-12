// Input 3 numbers
// Output type of triangle

// Explicit
// -all sides must be greater than length zero
// -sum of lenght of any two sides must be greater than the third
// Scalene
// -all sides are different lengths
// Isosceles
// -triangle has two sides of the same length
// Equilateral
// -all sides the same length

// Implicit
// -triangle sides must not have negative length
// -triangle sides can be decimals if they adhere to triangle definition

// data structure-numbers, return type of triangle

// use a constructor that accepts three sides as arguments
// constructor has a kind method which returns a string
// test sides to verify it is a triangle
// -if not, return invalid triangle
// else proceed
// -create a kind method
// -store sides in an array

// test sides to verify its a triangle
// -if array of sides, includes any negative number or zero, not a triangle
// -test the three combinations of sides added together and verify that sums are larger than third, if not, also not a triangle

// create kind method
// -test if all sides are equal
//  -use every method 
// -test if two sides are equal
//  -use slice/includes to compare one side to other two(2x)
// -^if not it's scalene

class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3];
    if (this.isInvalid()) {
      throw new Error("Invalid triangle lengths");
    }
  }
  
  kind() {
    if (this.sides.every(num => num === this.sides[0])) {
      return "equilateral";
    } else if (this.sides.slice(1).includes(this.sides[0]) || this.sides.slice(0, 2).includes(this.sides[2])) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }
  
  isInvalid() {
    let [side1, side2, side3] = this.sides;

    return (side1 <= 0 || side2 <= 0 || side3 <= 0) ||
      ((side1 + side2) <= side3 ||
       (side1 + side3) <= side2 ||
       (side2 + side3) <= side1);
  }
}

module.exports = Triangle;