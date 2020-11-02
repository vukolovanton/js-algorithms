// Main advantage - minimum swapping actions,
// only at the end of the loop.
export function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minValue = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minValue]) {
        minValue = j;
      }
    }
    if (i !== minValue) {
      var temp = arr[i];
      arr[i] = arr[minValue];
      arr[minValue] = temp;
    }
  }
  return arr;
}

selectionSort([37, 45, 29, 8, 14, 21, 88, 16]);
