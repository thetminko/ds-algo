// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

export function palindrome(str: string) {
  if (str.length < 2) {
    return true;
  }

  let start = 0;
  let end = str.length - 1;
  const chars = str.split('');

  let isPalindrome = true;
  while (end > start) {
    if (chars[start] !== chars[end]) {
      isPalindrome = false;
      break;
    }
    start++;
    end--;
  }

  return isPalindrome;
}
