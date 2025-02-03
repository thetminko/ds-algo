import { Queue } from '../queue';
import { Node } from './Node';

export class BinarySearchTree<T> {
  private _root: Node<T> | null = null;

  root() {
    return this._root;
  }

  insert(value: T) {
    const node = new Node<T>(value);
    if (!this._root) {
      this._root = node;
      return this;
    }

    let current = this._root;
    while (current) {
      const leftNode = current.left();
      const rightNode = current.right();

      if (value < current.value()) {
        if (!leftNode) {
          current.setLeft(node);
          return this;
        }
        current = leftNode;
      } else {
        if (!rightNode) {
          current.setRight(node);
          return this;
        }
        current = rightNode;
      }
    }
  }

  dfsPreOrder() {
    const result: T[] = [];
    const traverse = (node: Node<T> | null) => {
      if (!node) {
        return null;
      }

      result.push(node.value());
      traverse(node.left());
      traverse(node.right());
    };

    traverse(this._root);
    return result;
  }

  dfsInOrder() {
    const result: T[] = [];
    const traverse = (node: Node<T> | null) => {
      if (!node) {
        return null;
      }

      traverse(node.left());
      result.push(node.value());
      traverse(node.right());
    };

    traverse(this._root);
    return result;
  }

  dfsPostOrder() {
    const result: T[] = [];
    const traverse = (node: Node<T> | null) => {
      if (!node) {
        return null;
      }

      traverse(node.left());
      traverse(node.right());
      result.push(node.value());
    };

    traverse(this._root);
    return result;
  }

  bfs() {
    const result: T[] = [];
    if (!this._root) {
      return result;
    }

    const queue = new Queue<Node<T> | null>([this._root]);
    while (queue.size() > 0) {
      const node = queue.dequeue();
      if (!node) {
        continue;
      }

      result.push(node.value());

      if (node.left()) {
        queue.enqueue(node.left());
      }

      if (node.right()) {
        queue.enqueue(node.right());
      }
    }
    return result;
  }
}
