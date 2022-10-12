// input string
// output scrabble score

// explicit
// see chart of scores for each letter
// score is total of scores for each letter added together
// duplicate letters get scored separately
// scores are case insensitive of letter

// implicit
// only alpha characters have a score
// empty string or non alpha are scored as zero

// data structure- string, return number

// create scrabble class
// -set argument as a property on the class
// -set collection of scores as a static property of class
// create score method
// -loop through the lowercased word
//  -using count variable, add each score of letter to count
// return count

class Scrabble {
  constructor(word) {
    this.scrabble = typeof word === "string" ? word : "";
  }
  
  static scoreChart = {
    "a": 1,
    "b": 3,
    "c": 3, 
    "d": 2, 
    "e": 1, 
    "f": 4, 
    "g": 2, 
    "h": 4, 
    "i": 1, 
    "j": 8, 
    "k": 5, 
    "l": 1, 
    "m": 3, 
    "n": 1, 
    "o": 1, 
    "p": 3,
    "q": 10, 
    "r": 1, 
    "s": 1,
    "t": 1, 
    "u": 1, 
    "v": 4, 
    "w": 4, 
    "x": 8, 
    "y": 4, 
    "z": 10
  }
  
  score() {
    let wordToScore = this.scrabble.toLowerCase();
    let count = 0;
    for (let index = 0; index < wordToScore.length; index++) {
      if (/[a-z]/.test(wordToScore[index])) {
        let letterScore = Scrabble.scoreChart[wordToScore[index]];
        count += letterScore;
      }
    }
    return count;
  }
  
  static score(str) {
    return new Scrabble(str).score();
  }
}

module.exports = Scrabble;