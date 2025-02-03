export class Queue<T> {
  private _items: T[] = [];
  constructor(items: T[]) {
    this._items = items;
  }

  enqueue(item: T) {
    this._items.unshift(item);
    return this._items;
  }

  dequeue() {
    const deleted = this._items.splice(0, 1);
    return deleted[0];
  }

  values() {
    return this._items;
  }

  size() {
    return this._items.length;
  }
}
