// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

export function maxChar(str: string) {
  const charMap: { [key: string]: number } = {};
  let maxChar = {
    char: '',
    count: 0
  };

  for (const char of str.split('')) {
    charMap[char] = charMap[char] + 1 || 1;
    if (maxChar.count < charMap[char]) {
      maxChar = {
        char,
        count: charMap[char]
      };
    }
  }

  return maxChar.char;
}
