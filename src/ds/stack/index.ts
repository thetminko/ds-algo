export class Stack<T> {
  private _items: T[] = [];

  constructor(items: T[] = []) {
    this._items = items;
  }

  size() {
    return this._items.length;
  }

  push(item: T) {
    this._items.push(item);
    return this;
  }

  pop() {
    this._items.pop();
    return this;
  }

  find(val: T) {
    return this._items.find(item => item === val);
  }

  values() {
    return this._items;
  }

}
