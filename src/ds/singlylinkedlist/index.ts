import { Node } from "./Node";

export class SinglyLinkedList<T> {
  private _head: Node<T> | null = null;
  private _tail: Node<T> | null = null;
  private _size: number = 0;

  head() {
    return this._head;
  }

  tail() {
    return this._tail;
  }

  size() {
    return this._size;
  }

  add(value: T) {
    const node = new Node<T>(value);
    if (!this._head) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail!.setNext(node);
      this._tail = node;
    }

    this._size++;
  }

  traverse() {
    let node = this._head;
    const values: T[] = [];
    while (!!node) {
      values.push(node.value());
      node = node.next();
    }

    return values
  }

  reverse() {
    let current = this._head;
    let prev = null;
    let next = null;

    while(!!current) {
      next = current?.next();
      current?.setNext(prev);
      prev = current;
      current = next;
    }

    [this._head, this._tail] = [this._tail, this._head];
  }

  findByIdx(idx: number) {
    if (idx < 0 || idx > this._size - 1) {
      console.log("idx out of range");
      return null;
    }

    if (idx === 0) {
      return this._head;
    }

    if (idx === this._size - 1) {
      return this._tail;
    }

    let node = this._head?.next();
    let idxCounter = 1;

    while (!!node) {
      if (idxCounter === idx) {
        return node;
      }

      node = node.next();
      idxCounter++;
    }

    return null;
  }
}
