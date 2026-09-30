import { useEffect } from 'react';

function stringBasics() {
  const str = 'hello';

  console.log(`character access for your string - string index 0: ${str[0]}`);
  console.log(`string length: ${str.length}`);

  for (let i = 0; i < str.length; i++) {
    console.log(`string index value of ${i} - ${str[i]}`);
  }

  // slice vs splice
  // slice returns a copy of the segment of the string you want - it also works on arrays
  console.log(`substring - starting index included, ending index excluded - 1/4: ${str.slice(1, 4)}`);

  console.log('LOWER CASE STRING'.toLowerCase());

  // basic regex!
  // // - double slashes are required to start the regex
  // [a-z] - any letter a-z
  // [0-9] - any number 0-9
  // i - case insensitive
  // .test(value) - returns true or false

  console.log(`is string[0] alphanumeric: ${/[a-z0-9]/i.test(str[0])}`);

  // regex for digits
  console.log(`is digit (7) - ${/\d/.test('7')}`);

  // regex for whitespace
  console.log(`is white space - ${/\s/.test(' ')}`);

  // regex for any character
  console.log(`any characcter regex - ${/./.test('%')}`);

  // abc followed by a digit
  console.log(`abc followed by a digit - abc1: ${/[abc]\d/.test('abc1')}`);
  console.log(`abc followed by a digit - abcd: ${/[abc]\d/.test('abcd')}`);

  // abc followed by space followed by @
  console.log(`abc @ - ${/abc\s@/.test('abc @')}`);

  // anything except abc
  console.log(`anything except abc ${/^[abc]/.test('xyz')}`);

  // starts with digit
  console.log(/^\d/.test('1abc'));

  // ends with digit
  console.log(/\d$/.test('abc1'));

  // split a string into an array
  console.log(`testing splitting: Aaron - ${'aaron'.split('')}`);

  // joining characters in an array into a string
  console.log(['h', 'i'].join(''));

  // frequency map
  const counts = new Map<string, number>();

  'aaron'.split('').forEach((character) => {
    // Dev note - ?? falls back only if the return value is null / undefined
    // || falls back if the value is any falsy value - so if we whatever reason had a 0 it would fallback
    // not a big problem here but ?? is probably preferred
    const currentCount = counts.get(character) ?? 0;

    counts.set(character, currentCount + 1);
  });
}

// -- BASIC STRING PROBLEM SOLVING TECHNIQUES -- //
// 1. String Traversal
// 2. Character Counting
// 3. Building Strings
// 4. Normalization
// 5. Substrings

const stripNonAlphaNumericCharacters = (initialString: string): string => {
  const characters: Array<string> = [];

  initialString.split('').forEach((character: string) => {
    const isAlphaNumeric = /[a-z0-9]/i.test(character);

    isAlphaNumeric && characters.push(character.toLowerCase());
  });

  const normalizedString = characters.join('');

  return normalizedString;
};

// ignore capitalization and non-alphanumeric characters
// "can I make the input easier to compare first?"
// normalize -> compare
// comparing opposize ends often suggests two pointers
const getIsValidPalindrome = (initialString: string): Boolean => {
  const normalizedString = stripNonAlphaNumericCharacters(initialString);

  let left = 0;
  let right = normalizedString.length - 1;
  let isPalindrome = true;

  while (left < right) {
    console.log('looping');
    if (normalizedString[left] !== normalizedString[right]) {
      isPalindrome = false;
      break;
    }

    left++;
    right--;
  }

  return isPalindrome;
};

const useStrings = () => {
  useEffect(() => {
    const input = 'A man, a plan, a canal: Panama';
    const isValidPalindrome = getIsValidPalindrome(input);

    console.log(`isValidPalindrome: ${isValidPalindrome}`);
  }, []);
};

export default useStrings;
