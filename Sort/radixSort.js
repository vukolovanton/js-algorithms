function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// How many digits in a given number
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Which number has most digits (and how many)
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// Let's sort this shit
export function radixSort(nums) {
  let maxDigitsCount = mostDigits(nums);
  // Do for every digint in a num
  for (let k = 0; k < maxDigitsCount; k++) {
    // Create ten empty arrays
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

// radixSort([37, 4245, 129, 8, 14, 221, 88, 1146])
