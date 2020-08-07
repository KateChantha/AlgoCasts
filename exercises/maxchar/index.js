// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


/**
* Q: How to handle equal max cha? -- A: first char
  Q: case senitive? -- A: Yes
  Q: Handle empty sring?
  Q: space and symbol count? A: Yes
*/
function maxChar(str) {
  if (!str.length) return 'Empty string - max char not found'
  // create mapObj
  const mapObj = {};
  // iterate over sting
  for (let c of str) {
    // if char in mapObj then add 1
    // otherwise create a key with value of 1
    // if (mapObj[c]) {
    //   mapObj[c]++
    // } else {
    //   mapObj[c] = 1
    // }
    mapObj[c] = mapObj[c] + 1 || 1;
  }

  // console.log(mapObj);

  // create maxChar
  // create maxCount 
  let maxChar;
  let maxCount = 0;
  // loop over mapObj
  for (let k in mapObj) {
    // check if currChar value > maxCount ** ignor equal
    if (mapObj[k] > maxCount) {
      // true, reassign maxChar to currChar and reassign maxCOunt to currChar Value
      maxChar = k;
      maxCount = mapObj[k]
    }
  }

  //return maxChar
  return maxChar;
}

console.log(maxChar("AaBBdd"));

module.exports = maxChar;
