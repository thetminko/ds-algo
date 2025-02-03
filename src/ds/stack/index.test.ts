import { expect, test } from "vitest";
import { Stack } from "./index";

test("Stack", () => {
  const stack = new Stack<number>([1, 2, 3]);
  expect(stack.values()).toStrictEqual([1, 2, 3]);
  expect(stack.size()).toBe(3);
  expect(stack.push(4).values()).toStrictEqual([1, 2, 3, 4]);

  stack.pop();
  expect(stack.values()).toStrictEqual([1, 2, 3]);

  expect(stack.find(2)).toBe(2);
  expect(stack.find(4)).toBe(undefined);
});
