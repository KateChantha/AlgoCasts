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

  // SOLUTION:1 === for of loop =====
  // let reversedStr = ''
  // for (let char of str) {
  //   reversedStr = char + reversedStr;
  // }
  // return reversedStr;

  // SOLUTION:2 ==== array method helper reduce() =====
  // maket string to array 
  console.log(str.split(''))
  return str.split('').reduce((acc, curr) => curr + acc, '')

}

// console.log(reverse('apple'))

module.exports = reverse;
