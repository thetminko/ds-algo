import { test, expect } from 'vitest';
import { Queue } from './index';

test('Queue', () => {
  expect(new Queue([1, 2, 3]).values()).toStrictEqual([1, 2, 3]);
  expect(new Queue([2, 3]).enqueue((1)).values()).toStrictEqual([1, 2, 3]);
  expect(new Queue([1, 2, 3]).dequeue().values()).toStrictEqual([2, 3]);
}) 
