//Function that takes a string and returns counts of each character in the string
export function charCount(str) {
  const string = str.toLowerCase().replace(/\s/g, "");
  // Make object to return at end
  let result = {};
  // Loop over string
  for (let char of string) {
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  // return object
  return result;
}
