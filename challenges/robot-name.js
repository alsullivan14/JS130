// input none
// output robot object with name randomly generated, able to be reset

// explicit
// create robot with randomly generated name
// ability to reset name
// don't allow same name to be used twice

// implicit 
// robot class has name and reset instance methods
// name is a string
// name contains two letters followed by 3 numbers
// reset method wipes previously generated name from both robot instance and list of current robot names and creates new one

// data structure-no input, return string

// create robot class
// ?give robot name property which is result of calling create name method?
// use collection to avoid name collisions between different instances of robots
// -push any created name to array to track previously used names
// create name method
// -if name property of this robot instance is undefined, call helper method
// -while name already exists in robot factory name collection call helper method again
// -add name to previous names
// -return current name
// create reset method
// -remove current name from instance of robot
// -find current name in robot factory and remove from collection
// -use falsey place holder in name property
// create helper method
// -randomly generate 2 letters
// -randomly generate 3 numbers
// -add strings together
// -return string

Math.seedrandom = require('seedrandom');

class Robot {
  static previousNames = [];
  
  constructor() {
    this.robotName = undefined;
  }
  
  name() {
    
    if (!this.robotName) {
      let generateName = Robot.createString();
    
      while (Robot.previousNames.includes(generateName)) {
        generateName = Robot.createString();
      }
      this.robotName = generateName;
      Robot.previousNames.push(generateName);
      return this.robotName;
    }
    
    return this.robotName;
  }

  reset() {
    Robot.previousNames.splice(Robot.previousNames.indexOf(this.robotName), 1)
    
    this.robotName = undefined;
  };
  
  static createString() {
    let name = Robot.randomLetters() + Robot.randomNumbers();
    return name;
  };
  
  static randomLetters() {
    let twoLetters = '';
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    while (twoLetters.length < 2) {
      let randomIndex = Math.floor(Math.random() * 10);
      if (randomIndex < 25) {
        twoLetters += letters[randomIndex];
     }
    }
    return twoLetters;
  }
  
  static randomNumbers() {
    let threeNumbers = '';
    let numbers = '0123456789';
    while (threeNumbers.length < 3) {
      let randomIndex = Math.floor(Math.random() * 10);
      if (randomIndex < 9) {
        threeNumbers += numbers[randomIndex];
     }
    }
    return threeNumbers;
  }
}

let rob = new Robot();
console.log(rob.name());

module.exports = Robot;