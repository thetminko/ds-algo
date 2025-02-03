import { test, expect } from "vitest";
import { reverseForLoop, reversePointers } from "./index";

test('Reverse using pointers function exists', () => {
  expect(reversePointers).toBeDefined();
});

test('Reverse using pointers reverses a string', () => {
  expect(reversePointers('abcd')).toEqual('dcba');
});

test('Reverse using pointers reverses a string', () => {
  expect(reversePointers('  abcd')).toEqual('dcba  ');
});

// end of reverseUsingPointers.test.ts
test('Reverse using for loops function exists', () => {
  expect(reverseForLoop).toBeDefined();
});

test('Reverse using for loops reverses a string', () => {
  expect(reverseForLoop('abcd')).toEqual('dcba');
});

test('Reverse using for loops reverses a string', () => {
  expect(reverseForLoop('  abcd')).toEqual('dcba  ');
});
