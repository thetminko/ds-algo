// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

export function fizzBuzz(n: number) {
  let res: string[] = [];
  for (let i = 1; i <= n; i++) {
    const isMultipleOfThree = isMultipleOf(i, 3);
    const isMultipleOfFive = isMultipleOf(i, 5);

    if (isMultipleOfThree && isMultipleOfFive) {
      res.push('fizzbuzz');
    } else if (isMultipleOfThree) {
      res.push('fizz');
    } else if (isMultipleOfFive) {
      res.push('buzz');
    } else {
      res.push(i.toString());
    }
  }

  return res;
}

function isMultipleOf(num: number, multipleOf: number) {
  return num % multipleOf === 0;
}
