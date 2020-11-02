export function bubbleSort(arr) {
  // First, optimization. If there wouldn't be swaps,
  // that's basically means that we have finished sorting.
  // So let's skip unnecessary checks win noSwaps
  let noSwaps;
  for (let i = 0; i < arr.length; i++) {
    // If we are here, that means that we still sorting
    noSwaps = true;
    // We do not want to compare already sorted items
    // at the end of array
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap in a boomer way
        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;

        // Swap in a modern cool way
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        // We've not done yet, bro
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([37, 45, 29, 8, 14, 21, 88, 16]);
