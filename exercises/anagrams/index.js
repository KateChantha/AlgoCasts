// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // strip out non-alphabet on both string 
  // sort new string
  // using helper fucntion
  const newA = sortAlphabet(stringA);
  const newB = sortAlphabet(stringB);
  // compare if both string are strictly EQ, if true, return true ortherwise false
  return newA === newB;
}

function sortAlphabet(str) {
  // strip out non string 
  // truen to lowercase
  // return sort alphabet

  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
// console.log(sortAlphabet('Hello!!!'))

module.exports = anagrams;
