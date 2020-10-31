// Return true or false if all values in second array are equals
// to all values of first array, but squared
export function isSameButSquared(arr1, arr2) {
  // If arrays are with different length,
  // we do not have interest in further discussion
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    // If there is no such value, method IndexOf returns -1
    let isValueInArray = arr2.indexOf(arr1[i] ** 2);
    if (isValueInArray === -1) {
      return false;
    }
    arr2.splice(isValueInArray, 1);
  }
  return true;
}
