// input dna sequence
// ouput hamming distance

// Explicit
// -find hamming distnace between two strands of dna
// -hamming distance is the number of different nucleotides between two strands of the same length
//  -if strands are of different lengths, the shorter length is used and portion of longer strand from index 0 to index (length) is used
// -must be a number
// -comparison of nucleotides at same index

// Implicit
// -if strands are of length zero, hamming distance is zero
// -identical strands also zero
// -distance can be length of sequence if every nucleotide is different
// -even one extra nucleotide at index 0 can change the entire hamming distance
// -differnces in nucleotides can occur anywhere in the strand
// -when comparing strands of different lengths, if original is longer, when comparing the two strands, original is not modified(must use copy)

// data structure- strings, return number

// create a constructor which accepts string argument
// constructor has hamming Distance method
// create a sequence and length variable
// within hammDistance method, accept one argument, comparison strand
// -compare lengths and make necessary copy to be compared for the longer strand
// -iterate through each strand counting any differences

// hamming distance method
// both length zero will simply return count
// -if lengths are not the same
//  -find shorter length and create variable with slice of longer strand to match shorter length
//   -loop over either array
//    -use count to keep track of differences
//    -compare nucleotide at each position
// -else
//  -loop over either array
//   -use count to keep track of differences
//   -compare nucleotide at each position
//  return count
// length zero? return hammingDistance zero

class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(comparison) {
    let minLength = Math.min(this.strand.length, comparison.length);
    let differences = 0;

    for (let i = 0; i < minLength; i++) {
      if (this.strand[i] !== comparison[i]) {
        differences += 1;
      }
    }

    return differences;
  }
}

module.exports = DNA;