// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // seperate each word and store in the array
  const wordArray = str.split(' ');
  const capitalizeArr = [];
  // loop thru the array 
  // uppercase the first char of word
  wordArray.forEach(word => capitalizeArr.push(word[0].toUpperCase() + word.slice(1)))
  console.log(capitalizeArr)
  // join each word back to a string 
  // return result string
  return capitalizeArr.join(' ');
}

capitalize('a short sentence')

module.exports = capitalize;
