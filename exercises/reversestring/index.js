// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/**
 * @param {*} str 
 * @returns new str
 */
function reverse(str) {
  // check if input is a string
  // create var reversedStr
  // loop over input string 
  // add each char infront of reversedStr
  // return reversedStr

  let reversedStr = ''
  for (let char in str) {
    reversedStr = char + reversedStr;
  }
  return reversedStr;
}

module.exports = reverse;
