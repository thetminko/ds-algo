export function reversePointers(str: string) {
  let end = str.length - 1;
  let reversed = '';

  while (end >= 0) {
    reversed += str[end];
    end--;
  }

  return reversed;
}

export function reverseForLoop(str: string) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

export function reverseReduce(str: string) {
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

export function reverseReverse(str: string) {
  return str.split('').reverse().join('');
}
