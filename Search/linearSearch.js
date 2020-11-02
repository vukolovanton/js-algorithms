// Well, basic linear search for unsorted data, O(n)
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// Run
linearSearch([12, 43, 42, 14, 52, 123, 57, 1], 57);
