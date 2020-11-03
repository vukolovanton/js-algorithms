function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  // Push rest of the data, because it already sorted
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

export function mergeSort(arr) {
  // Split on smaller arrays
  // We want recursively call or function untill array won't contain 0 or 1 elem
  if (arr.length <= 1) return arr;
  // Chop, chop, chop
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

//mergeSort([37, 45, 29, 8, 14, 21, 88, 16]);
