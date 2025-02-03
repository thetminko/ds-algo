import { expect, test } from "vitest";
import { Stack } from "./index";

test("Stack", () => {
  expect(new Stack<number>([1, 2, 3]).values()).toStrictEqual([1, 2, 3]);
  expect(new Stack<number>([1, 2, 3]).size()).toBe(3);
  expect(new Stack<number>([1, 2, 3]).push(4).values()).toStrictEqual([1, 2, 3, 4]);
  expect(new Stack<number>([1, 2, 3]).pop().values()).toStrictEqual([1, 2]);
  expect(new Stack<number>([1, 2, 3]).find(2)).toBe(2);
  expect(new Stack<number>([1, 2, 3]).find(4)).toBe(undefined);
});
