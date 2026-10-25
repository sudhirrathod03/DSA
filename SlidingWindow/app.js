//1 . Average of All Subarrays of Size K
// Concept: Running Sum
// Example:
// Input: [1,2,3,4,5], k=3
// Output:
// 2
// 3
// 4

let arr = [1, 2, 3, 4, 5];
let k = 3;

function avgOfAllSubarr(arr, k) {
  let i = 0;
  let j = 0;
  let avg = 0;
  let sum = 0;
  let n = arr.length;

  while (j < n) {
    sum += arr[j];

    if (j - i + 1 === k) {
      avg = sum / k;
      console.log(avg);

      sum -= arr[i];
      i++;
    }
    j++;
  }
}

//  Maximum Average Subarray I
// LeetCode 643

function maxAvgOfSubarr(arr, k) {
  let i = 0,
    j = 0,
    sum = 0,
    avg = 0,
    maxAvg = 0;
  let n = arr.length;

  while (j < n) {
    sum += arr[j];

    if (j - i + 1 === k) {
      avg = sum / k;
      maxAvg = Math.max(avg, maxAvg);
      sum -= arr[i];
      i++;
    }
    j++;
  }
  return maxAvg;
}
maxAvgOfSubarr(arr, 3);

// First Negative Integer in Every Window

function firstNegative(arr, k) {
  let i = 0;
  let j = 0;
  let n = arr.length;
  let queue = [];

  while (j < n) {
    if (arr[j] < 0) {
      queue.push(arr[j]);
    }

    if (j - i + 1 === k) {
      if (queue[0] !== undefined) {
        console.log(queue[0]);
      } else {
        console.log(0);
      }

      if (arr[i] < 0) {
        queue.shift();
      }
      i++;
    }
    j++;
  }
}
// firstNegative([1, -2, 4, 2, -5], 2);

// function countAllAnagrams(str){

// }

function freq() {
  let str = "abcdefgaa";
  let arr = new Array(26).fill(0);

  for (let i = 0; i < str.length; i++) {
    let index = str.charCodeAt(i) - 97;
    arr[index] = arr[index] + 1;
  }
  console.log(arr);
}

function countOccurenceOfAnagran(str, pat) {
  let arr = new Array(26).fill(0);

  function allZero(arr) {
    for (let num of arr) {
      if (num !== 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < pat.length; i++) {
    let idx = pat.charCodeAt(i) - 97;
    arr[idx]++;
  }

  let res = 0;
  let i = 0;
  let j = 0;

  while (j < str.length) {
    arr[str.charCodeAt(j) - 97]--;

    if (j - i + 1 == pat.length) {
      if (allZero(arr)) {
        res++;
      }
      arr[str.charCodeAt(i) - 97]++;
      i++;
    }
    j++;
  }

  console.log(res);
}

countOccurenceOfAnagran("forxorfox", "for");
