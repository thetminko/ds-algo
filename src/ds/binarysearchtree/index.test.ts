import { expect, test } from "vitest";
import { BinarySearchTree } from "./index";

test("BinarySearchTree", () => {
  const bst = new BinarySearchTree<number>();

  bst.insert(5);
  expect(bst.root()?.value()).toBe(5);
  expect(bst.dfsPreOrder()).toStrictEqual([5]);

  bst.insert(3);
  bst.insert(7);
  expect(bst.dfsPreOrder()).toStrictEqual([5, 3, 7]);

  bst.insert(2);
  bst.insert(4);

  expect(bst.dfsPreOrder()).toStrictEqual([5, 3, 2, 4, 7]);
  expect(bst.dfsInOrder()).toStrictEqual([2, 3, 4, 5, 7]);
  expect(bst.dfsPostOrder()).toStrictEqual([2, 4, 3, 7, 5]);

  expect(bst.bfs()).toStrictEqual([5, 3, 7, 2, 4]);
});
