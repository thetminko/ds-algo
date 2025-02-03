import { expect, test } from "vitest";
import { SinglyLinkedList } from "./index";

test("SinglyLinkedList", () => {
  const list = new SinglyLinkedList<number>();
  expect(list.head()).toStrictEqual(null);

  list.add(1);
  expect(list.head()?.value()).toBe(1);
  expect(list.tail()?.value()).toBe(1);

  list.add(2);
  expect(list.head()?.value()).toBe(1);
  expect(list.tail()?.value()).toBe(2);

  list.add(3);
  list.add(4);

  expect(list.traverse()).toStrictEqual([1, 2, 3, 4]);

  list.reverse();
  expect(list.traverse()).toStrictEqual([4, 3, 2, 1]);

  expect(list.findByIdx(0)?.value()).toBe(4);
  expect(list.findByIdx(1)?.value()).toBe(3);
  expect(list.findByIdx(10)?.value()).toBeUndefined();

  expect(list.findByValue(1)).toBeDefined();

  list.insert(5, 2);
  expect(list.traverse()).toStrictEqual([4, 3, 5, 2, 1]);

  list.insert(10, 0);
  expect(list.traverse()).toStrictEqual([10, 4, 3, 5, 2, 1]);

  list.insert(100, 100);
  expect(list.traverse()).toStrictEqual([10, 4, 3, 5, 2, 1, 100]);
});
