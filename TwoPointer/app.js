// Q1 : Example: Find two numbers whose sum equals 9 in a sorted array.

let arr = [1, 2, 3, 4, 5, 6];

function twoSum(arr, target) {
  let i = 0;
  let j = arr.length - 1;

  while (j > i) {
    let sum = arr[i] + arr[j];

    if (sum === target) {
      return [i, j];
    } else if (sum > target) {
      j--;
    } else {
      i++;
    }
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function removeAllOcc(arr, ele) {
  let i = 0,
    j = arr.length - 1;
  let count = 0;
  while (i <= j) {
    if (arr[i] !== ele) {
      count++;
      i++;
    } else {
      swap(arr, i, j);
      j--;
    }
  }

  console.log(arr);
  console.log("count", count);
}

function moveZeroToEnd(arr) {
  let i = 0,
    j = arr.length - 1;

  while (i <= j) {
    if (arr[i] === 0) {
      swap(arr, i, j);
      j--;
    } else {
      i++;
    }
  }
  console.log("ZERO ARR", arr);
}

moveZeroToEnd([1, 2, 0, 5, 0, 4, 0])

function removeDuplicates(arr){
  let i = 0, j= 1;
  while(j < arr.length){
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j];
    }
    j++;
  }
  console.log(arr);
  
}
removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5])