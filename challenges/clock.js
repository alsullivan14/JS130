// input hours and minutes 
// output clock object wiht methods

// explicit
// create clock class
// class has a static method 'at' which creates new clock instance
// 'at' method accepts hours, minutes as arguments
// can add and subtract from clock using methods named as such

// implicit
// use 24 hour clock
// instances of clock have hours and minutes properties
// 'add' and 'subtract' are instance methods of a clock object which change the string value of the clock, accept a number of minutes as argument
// clocks with the same time are equal
// 'isEqual' method that tests equality between two clocks
// if minutes are undefined, default to 0
// method to return clocks time as a string
// subtracting a larger number of minutes than current time will return 24 - minutes

// data structure - numbers, string, return string

// create Clock class
// -use constructor to create hour and minute properties
// create at method
// -if no minutes are supplied default to 0
// -creates new instance of clock by calling Clock constructor
// -returns clock instance
// create add method
// -compute minutes since midnight using helper function
// -add minutes to time, unless greater than or equal to 1440, then -
//   -while condition, subtract time from minutes since midnight
//   -return minutes from midnight
// -compute time since midnight using another helper function
// -return new clock with added time
// create subtract method
// -compute minutes since midnight with helper function
// -if minutes will be less than zero,
//  -use add value to 1440
// -compute time since midnight using helper func
// -return new clock
// create equality method
// -if value of hours, minutes is equal, return true
// -else false
// create toString method
// -return hours and minutes in 'HH:MM' format
// create minutes since midnight function
// -1440 - number of minutes
// create time since midnight
// -using value of above helper function, calculate time


class Clock {
  static ONE_DAY = 24 * 60;
  
  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }
  
  static at(hours, minutes) {
    if (minutes === undefined) {
      let noMinutes = 0;
      return new Clock(hours, noMinutes);
    }
    return new Clock(hours, minutes);
  }
  
  add(minutes) {
    let timeSinceMidnight = this.minutesSinceMidnight();
    timeSinceMidnight = timeSinceMidnight + minutes;
    
    while (timeSinceMidnight >= Clock.ONE_DAY) {
      timeSinceMidnight = timeSinceMidnight - Clock.ONE_DAY;
    }
    
    return Clock.timeFromMinutesToMidnight(timeSinceMidnight);
  }
  
  subtract(minutes) {
    let timeSinceMidnight = this.minutesSinceMidnight();
    timeSinceMidnight = timeSinceMidnight - minutes;
    
    while (timeSinceMidnight < 0) {
      timeSinceMidnight = timeSinceMidnight + Clock.ONE_DAY;
    }
    
    return Clock.timeFromMinutesToMidnight(timeSinceMidnight);
  }
  
  toString() {
    let padHours = this.hours < 10 ? '0' + String(this.hours) : this.hours;
    let padMinutes = this.minutes < 10 ? '0' + String(this.minutes) : this.minutes;
    return `${padHours}:${padMinutes}`;
  }
  
  isEqual(otherClock) {
    if (this.hours === otherClock.hours && this.minutes === otherClock.minutes) {
      return true;
    }
    return false;
  }
  
  minutesSinceMidnight() {
    let totalMinutes = 60 * this.hours + this.minutes;
    return totalMinutes % Clock.ONE_DAY;
  }
  
  static timeFromMinutesToMidnight(minutes) {
    let time = minutes;
    let computedHours = Math.floor(time / 60);
    let computedMinutes = time % 60;
    return Clock.at(computedHours, computedMinutes);
  }
}


let c = Clock.at(3, 14).add(16);
console.log(c.toString());

let d = Clock.at(0, 30).subtract(60);
console.log(d.toString());

module.exports = Clock;