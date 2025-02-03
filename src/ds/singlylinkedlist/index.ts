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

  insert(value: T, idx?: number) {
    idx = idx ?? 0;
    if (idx < 0) {
      return;
    }

    if (this._size === 0 || idx === undefined) {
      this.add(value);
      return;
    }

    const node = new Node<T>(value);
    if (this._size === 1) {
      node.setNext(this._tail);
      this._head = node;
      this._size++;
      return;
    }


    const idxNode = this.findByIdx(idx);
    if (!idxNode)  {
      this.add(value);
      return;
    }

    const prevNode = this.findByIdx(idx - 1);
    node.setNext(idxNode);

    if (prevNode) {
      prevNode.setNext(node);
    } else {
      this._head = node;
    }

    this._size++;
    return this;
  }

  remove(idx: number) {
    if (idx < 0) {
      return;
    }

    if (!this._head) {
      return;
    }

    if (idx === 0) {
      this._head = this._head.next();
      this._size--;
      return;
    }

    const prevNode = this.findByIdx(idx - 1);
    if (!prevNode) {
      return;
    }

    if (idx === this._size - 1) {
      prevNode.setNext(null);
      this._tail = prevNode;
      this._size--;
      return;
    }

    const nextNode = this.findByIdx(idx + 1);
    prevNode.setNext(nextNode ?? null);
    this._size--;
    return;
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
