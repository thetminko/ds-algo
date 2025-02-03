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

  insert(value: T, idx: number) {
    const idxNode = this.findByIdx(idx);
    if (!idxNode)  {
      throw new Error("Invalid index");
    }

    const node = new Node<T>(value);

    if (idx === 0) {
      this._head = node;
      this._head.setNext(idxNode);
    } else if (idx === this._size - 1) {
      this._tail = node;
      idxNode.setNext(this._tail);
    } else {
      const prevNode = this.findByIdx(idx - 1);
      prevNode!.setNext(node);
      node.setNext(idxNode);
    }

    return this;
  }

  traverse() {
    let node = this._head;
    const values: T[] = [];
    while (!!node) {
      values.push(node.value()!);
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

  findByValue(value: T) {
    let node = this._head;
    while (!!node) {
      if (node.value() === value) {
        return node;
      }

      node = node.next();
    }

    return null;
  }
}
