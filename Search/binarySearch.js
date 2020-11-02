// Works with sorted array
function binarySearch(arr, val) {
  // Init start and end values
  let start = 0;
  let end = arr.length - 1;
  // Handle odd length of array
  let middle = Math.floor((start + end) / 2);
  // We need to check start and end in case if val isn't in array
  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === val) {
    return middle;
  }
  return -1;
}
// Implementation
binarySearch([2, 5, 6, 8, 19, 21, 41, 65, 73, 78], 19);
