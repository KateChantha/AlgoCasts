// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // create var chunked set to an empty array
  const chunked = [];
  // iterate over input array
  array.forEach(element => {
    let lastElem = chunked[chunked.length - 1]
    // check if lastElem of chunked is not exist OR lastElem length is grater than size, if yes, create an empty array and push elem to that array
    if (!lastElem || lastElem.length >= size) {
      chunked.push([element]);
    } else {
      // if not, push element to laseELem
      chunked.lastElem.push(element);
    }
  });
  // reteurn chunked
  return chunked;
}

module.exports = chunk;
