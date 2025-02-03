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
    return this._items.pop();
  }

  shift() {
    return this._items.shift();
  }

  find(val: T) {
    return this._items.find(item => item === val);
  }

  values() {
    return this._items;
  }

}
