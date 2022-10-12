// input list of possible anagrams
// output anagrams

// explicit
// anagram is a word containing exact same letters as another word
// if no anagrams, return empty list
// return all anagrams which are not duplicate of original
// anagrams are case insensitive

// implicit
// words with subsets are not anagrams, must be same length with same letters
// if a word two words each contain same letters but have different duplicates, not an anagram ex. eagle, galea

// data structure - string(comparison), return array

// create anagram class
// create property
// -pattern to match against
// create match method with list as argument
// check for case-insensitive words which are identical and modify the list variable within match method to exclude these
// loop through list of words
// -if word has same length and same characters as pattern, check for different duplicates
//  -if number of characters in each word match
//   -add to return array
// -else not anagram
// return anagrams

class Anagram {
  constructor(word) {
    this.pattern = word;
  }
  
  match(list) {
    let anagrams = [];
    let possibleMatches = list.slice();
    possibleMatches = possibleMatches.filter(word => word.toLowerCase() !== this.pattern);
    for (let index = 0; index < possibleMatches.length; index++) {
      let sortedPattern = this.pattern.toLowerCase().split("").sort();
      let sortedWord = possibleMatches[index].toLowerCase().split("").sort();
      if (String(sortedPattern) === String(sortedWord)) {
        anagrams.push(possibleMatches[index]);
      }
    }
    return anagrams;
  }
}

module.exports = Anagram;