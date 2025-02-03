export class Node<T> {
  private _value: T;
  private _left: Node<T> | null;
  private _right: Node<T> | null;

  constructor(value: T) {
    this._value = value;
    this._left = null;
    this._right = null;
  }

  value() {
    return this._value;
  }

  left() {
    return this._left;
  }

  right() {
    return this._right;
  }

  setLeft(node: Node<T>) {
    this._left = node;
    return this;
  }

  setRight(node: Node<T>) {
    this._right = node;
    return this;
  }
}
