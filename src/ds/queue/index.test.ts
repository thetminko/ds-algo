import { test, expect } from 'vitest';
import { Queue } from './index';

test('Queue', () => {
  const queue = new Queue<number>([1, 2, 3]);
  expect(queue.values()).toStrictEqual([1, 2, 3]);

  queue.enqueue(100);
  expect(queue.values()).toStrictEqual([1, 2, 3, 100]);

  expect(queue.dequeue()).toBe(1);
  expect(queue.values()).toStrictEqual([2, 3, 100]);
});
