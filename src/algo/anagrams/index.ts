// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const charCodeOfZero = '0'.charCodeAt(0);
const charCodeOfNine = '9'.charCodeAt(0);
const charCodeOfA = 'A'.charCodeAt(0);
const charCodeOfZ = 'Z'.charCodeAt(0);

export function anagrams(stringA: string, stringB: string) {
  stringA = stringA.toUpperCase();
  stringB = stringB.toUpperCase();

  const longerArray = stringA.length > stringB.length ? stringA : stringB;

  const charMap: { [key: string]: number } = {};
  for (let i = 0; i < longerArray.length; i++) {
    charMap[stringA[i]] = (charMap[stringA[i]] ?? 0) + 1;
    charMap[stringB[i]] = (charMap[stringB[i]] ?? 0) - 1;
  }

  for (const key of Object.keys(charMap)) {
    if (!isAlphanumeric(key.charCodeAt(0))) {
      continue;
    }

    if (charMap[key] !== 0) {
      return false;
    }
  }

  return true;
}

function isAlphanumeric(charCode: number) {
  return (charCode >= charCodeOfZero && charCode <= charCodeOfNine) || (charCode >= charCodeOfA && charCode <= charCodeOfZ);
}
