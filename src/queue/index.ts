export class Queue<T> {
  private _items: T[] = [];
  constructor(items: T[]) {
    this._items = items;
  }

  enqueue(item: T) {
    this._items.unshift(item);
    return this;
  }

  dequeue() {
    this._items.splice(0, 1);
    return this;
  }

  values() {
    return this._items;
  }
}
