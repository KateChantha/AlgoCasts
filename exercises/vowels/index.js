// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let count = 0;
  const vowelsArr = ['a', 'e', 'i', 'o','u'];

  // iterate over string 
  // check if each charactor of string includes in vowelArr
  for (let char of str.toLowerCase()) {
    if (vowelsArr.includes(char)) {
      count++;
    }
  }

  return count;
}

module.exports = vowels;
