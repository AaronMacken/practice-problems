import { useEffect } from 'react';

// Array problems usually consist of things like
// "Have I seen this value before" (Set)
// "How many times has this value appeared" (Map)

// -- fundamental examples -- //

// const existingValues = new Set();
// existingValues.add(5);
// console.log('does value exist (5)', existingValues.has(5));

// const occurencesOfValue = new Map<string, number>();
// occurencesOfValue.set('a', 2);
// console.log('occurences of `a`', occurencesOfValue.get('a'));
// console.log('does `a` exist in occurences?', occurencesOfValue.get('a'));

function getDoesContainDuplicate() {
  // contains duplicate
  // given an array of numbers, return `true` if any number appears more than once
  // before coding ...
  // 1Q) what is the brute force solution
  // 1A) loop thru the array, store values somewhere, if current value exists in the data structure, return true
  // 2Q) what am I repeatedly trying to determine
  // 2A) has the current value that I'm looking at the in the array appeared previously
  // 3Q) could a `Set` help?
  // 3A) Yes! this is the best use case

  const numbers = [1, 1, 0, -2, 3, 2, 7];
  const uniqueNumbers = new Set<number>();
  let doesContainDuplicate = false;

  for (let i = 0; i < numbers.length; i++) {
    console.log('looping on index: ', i);

    if (uniqueNumbers.has(numbers[i])) {
      doesContainDuplicate = true;

      break;
    }

    uniqueNumbers.add(numbers[i]);
  }

  console.log('duplicate: ', doesContainDuplicate);
  // the main lesson here is that you've seen a value before and you have a way to reference that
}

function getTwoSum() {
  // find two numbers that add up to the target
  // return their indicies
  // first, think through the brute force solution ...
  // I could add up every single index with every other index and travers, but it would be inefficient
  // then ask ...
  // for the current number, what value would I need?
  // example, current number is 2, target is 7, you'd need 5, have you seen 5 before?
  // this should push you towards using a map, because you can use key value pairs for the value, and its index
  // loop thru the array, if you've not seen that value before, store it in a map `value: index`
  // then calculate a potential second value that could equal the target if added to the current
  // check if that second value exists, if it does, short circuit and return the two indexes
  const target = 10;
  const numbers = [5, 2, 3, 1, 9, 2];
  const numbersWithIndexes = new Map();
  let twoSumIndecies = [-1, -1];

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    const potentialMatch = target - currentNumber;

    if (numbersWithIndexes.has(potentialMatch)) {
      twoSumIndecies = [numbersWithIndexes.get(potentialMatch), i];

      break;
    }

    numbersWithIndexes.set(currentNumber, i);
  }

  console.log('two sum indecies: ', twoSumIndecies);
  // the main lesson here is looking up something you encountered earlier
}

function getFrequencyMap(inputString: string): Map<string, number> {
  const frequencyMap = new Map<string, number>();

  inputString.split('').forEach((character) => {
    if (!frequencyMap.has(character)) {
      frequencyMap.set(character, 1);

      return;
    }

    const occurences = frequencyMap.get(character)! + 1;

    frequencyMap.set(character, occurences);
  });

  return frequencyMap;
}

function getIsValidAnagram(): boolean {
  // exmaple listen / silent
  // ask: how can I prove both strings contain the same characters the same number of times
  // answer: using a frequency map
  // this is related to the occurences of a given value within a collection, which is a great use case for a map
  let isEqual = true;

  const stringOne = 'listen';
  const stringTwo = 'silent';

  const mapOne = getFrequencyMap(stringOne);
  const mapTwo = getFrequencyMap(stringTwo);

  // easy - we have two frequency maps
  // now we must assert that every key in map one also exists in map two with the same count

  // for efficiency you can do a quick size check to rule out futher calculations
  if (mapOne.size !== mapTwo.size) {
    isEqual = false;

    return isEqual;
  }

  mapOne.forEach((value, key) => {
    if (mapTwo.get(key) !== value) {
      isEqual = false;
    }
  });

  return isEqual;
}

function getMostFrequentItem(): string {
  const items = ['cat', 'dog', 'cat', 'bird', 'cat', 'dog'];
  const frequencyMap = new Map();
  let mostFrequentItem = '';

  items.forEach((item) => {
    // --- build the frequency map --- //
    if (!frequencyMap.has(item)) {
      frequencyMap.set(item, 1);

      return;
    }

    const currentOccurences = frequencyMap.get(item) + 1;

    frequencyMap.set(item, currentOccurences);

    // --- use frequency map to track most common value --- //

    if (!mostFrequentItem) {
      mostFrequentItem = item;
    }

    if (currentOccurences > frequencyMap.get(mostFrequentItem)) {
      mostFrequentItem = item;
    }
  });

  return mostFrequentItem;
}

function getGroupedAnagrams(): void {
  const n = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
  const groupedAnagrams = new Map<string, Set<string>>();

  n.forEach((value) => {
    const keyFromSortedString = value.split('').sort().join('');

    if (!groupedAnagrams.has(keyFromSortedString)) {
      const groupedAnagramSet = new Set<string>();

      groupedAnagramSet.add(value);
      groupedAnagrams.set(keyFromSortedString, groupedAnagramSet);

      return;
    }

    const currentAnagrams = groupedAnagrams.get(keyFromSortedString)!;

    currentAnagrams?.add(value);
    groupedAnagrams.set(keyFromSortedString, currentAnagrams);
  });

  n.forEach((value) => {
    const keyFromSortedString = value.split('').sort().join('');
    const anagramGroup = groupedAnagrams.get(keyFromSortedString)!;

    console.log(`${keyFromSortedString} - `, Array.from(anagramGroup));
  });
}

function getUnique(): void {
  const items = [1, 2, 2, 3, 3];

  const uniqueItems = new Set(items);

  console.log('unique items: ', [...uniqueItems]);
}

function countItems(): void {
  const items = ['a', 'b', 'a', 'c', 'a'];
  const countOfItemsByName = new Map<string, number>();

  items.forEach((item) => {
    if (!countOfItemsByName.has(item)) {
      countOfItemsByName.set(item, 1);

      return;
    }

    const countOfItems = countOfItemsByName.get(item)! + 1;
    countOfItemsByName.set(item, countOfItems);
  });

  countOfItemsByName.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
}

function hasDuplicate(): void {
  const items = [1, 4, 7, 4];
  const duplicateItemMap = new Map<number, number>();
  let isDuplicate = false;

  items.forEach((item) => {
    if (!duplicateItemMap.has(item)) {
      duplicateItemMap.set(item, 1);

      return;
    }

    isDuplicate = true;
  });

  console.log('has duplicate: ', isDuplicate);
}

const useArraysAndMaps = () => {
  useEffect(() => {
    countItems();
  }, []);
};

export default useArraysAndMaps;
