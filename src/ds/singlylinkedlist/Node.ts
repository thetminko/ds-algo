export class Node<T> {
  private _value: T;
  private _next: Node<T> | null;

  constructor(value: T) {
    this._value = value;
    this._next = null;
  }

  value() {
    return this._value ?? null;
  }

  next() {
    return this._next ?? null;
  }

  setNext(node: Node<T> | null) {
    this._next = node;
    return this;
  }
}
