import { useEffect } from 'react';

// The main idea,
// maintaining two pointers that are positioned
// at each end of a string or array
// write logic to move each pointer based on your desired outcome

// two patters
// - opposite ends moving inwards: good for sums, palindromes, reversing
// - same direction: one pointer moves and data is calculated accordingly

// -- example --
// left = 0; right = nums.length - 1
// while left < right ... inspect values & move pointers

// Remove Duplicates from Sorted Array
// Pattern: Same Direction
// Given a sorted array, remove duplicates `in place` so each unique
// number appears once in the beginning

// Since the array is sorted you do not need a set or frequency map

// input: [1, 1, 2, 2, 3, 4, 4]
// output: 4
// numbers after index 3 dont matter and the array should start with [1, 2, 3, 4, ...]

// simple explanation, read is just the index thats looping thru
// write is the index of the unique values which gets updated every time we see unique
// const removeDuplicatesInPlace = (inputArray: Array<number>): number => {
//   const inputArrayCopy = [...inputArray];

//   if (!inputArray.length) {
//     return 0;
//   }

//   // 1 2 3 2 3
//   let write = 1;

//   for (let read = 1; read < inputArrayCopy.length; read++) {
//     if (inputArrayCopy[read] !== inputArrayCopy[write - 1]) {
//       inputArrayCopy[write] = inputArrayCopy[read];
//       write++;
//     }
//   }

//   console.log('input array: ', inputArrayCopy);

//   return write;
// };

// given a sorted array, put the unique numbers to the front of the array in place,
// and return the number of unique character in the array
// input: [1, 1, 2, 2, 3, 4, 4]
// output: 4
const removeDuplicatesInPlace = () => {
  const input = [1, 1, 2, 2, 3, 4, 4];
  let write = 1;

  // we know that the first item is unique since its a sorted array
  // start the reading index at one and traverse forward

  // the writing index is the pointer that tells us
  // where the next unique value would be written

  // so we need to begin be seeing if the index at 1 is different from 0
  // if it is, then we will modify in place and progress write (the next locaiton to write)

  // otherwise we keep traversing with read and then we hold the write index for whenever its time
  for (let read = 1; read < input.length; read++) {
    if (input[read - 1] !== input[read]) {
      input[write] = input[read];

      write++;
    }
  }

  console.log('updated input: ', input);
  console.log('length of uniques: ', write);
};

// n: [0, 1, 0, 3, 12]
// o: [1, 3, 12, 0, 0]
// try to use one pointer to find non zero vals,
// and another to find where the next non zero belongs

// 1, 3, 12, 3, 12
// occurencesOfZero = 2;
// write = 3;
// read = 2;

const moveZeroesInPlace = () => {
  const numbers = [0, 1, 0, 3, 12];
  let write = 0;
  let occurencesOfZero = 0;

  for (let read = 0; read < numbers.length; read++) {
    const currentNumber = numbers[read];

    if (currentNumber !== 0) {
      numbers[write] = numbers[read];
      write++;
    } else {
      occurencesOfZero++;
    }
  }

  while (occurencesOfZero > 0) {
    numbers[numbers.length - occurencesOfZero] = 0;
    occurencesOfZero--;
  }

  console.log('numbers: ', numbers);
};

const useTwoPointers = () => {
  useEffect(() => {
    // console.log('remove duplicates in place: ', removeDuplicatesInPlace([1, 1, 2, 2, 3, 4, 4]));
    // removeDuplicatesInPlace();
    moveZeroesInPlace();
  }, []);
};

export default useTwoPointers;
