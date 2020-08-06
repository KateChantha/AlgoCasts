// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // convert int to string then to array
  // use array helper method
  // join back to string 

  let reverse = n.toString().split('').reverse().join('');
  console.log(reverse);
  // make sure to return **parse back to int with postive or negative value - using .sign()
  return parseInt(reverse, 10) * Math.sign(n);
}

// console.log(parseInt('0070', 10))
console.log(reverseInt(-15))

module.exports = reverseInt;
