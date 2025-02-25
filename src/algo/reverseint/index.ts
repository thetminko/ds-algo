// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

export function reverseInt(n: number) {
  let reversed = '';
  for (const char of `${n}`) {
    reversed = char + reversed;
  }

  return parseInt(reversed) * Math.sign(n);
}
