// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


/**
 * Q: Case sensitive? Yes >>> A != a
 * @param str
 * @returns boolean
 */
function palindrome(str) {
  //--------- CASE INSENSITIVE ------------
  // make str toLowerCase store in newStr
  let newStr = str.toLowerCase();
  //--------------------------------------
  // determine breaking point at mid lenght and floor down mid lenght
  let midlen = Math.floor(str.length / 2);
  // console.log("newStr:", newStr, 'midlen:', midlen)
  // loop over newStr by compare a pair of beg and last
  for (let i = 0; i < midlen; i++) {
    // if curr i and curr j doesn't match, return false
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  // at the end of loop return true
  return true;
}

// console.log(palindrome("Jbcba"));

module.exports = palindrome;
