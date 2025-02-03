import { fizzBuzz } from './index';
import { test, expect, beforeEach, afterEach } from 'vitest';

test('fizzBuzz function is defined', () => {
  expect(fizzBuzz).toBeDefined();
});

test('Calling fizzbuzz with `5` prints out 5 statements', () => {
  const res = fizzBuzz(5);
  expect(res.length).toBe(5);
  expect(res).toEqual(['1', '2', 'fizz', '4', 'buzz']);
});

test('Calling fizzbuzz with 15 prints out the correct values', () => {
  const res = fizzBuzz(15);
  expect(res.length).toBe(15);
  expect(res).toEqual(['1', '2', 'fizz', '4', 'buzz', 'fizz', '7', '8', 'fizz', 'buzz', '11', 'fizz', '13', '14', 'fizzbuzz']);
});
