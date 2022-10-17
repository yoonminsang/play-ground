import { areEqual, getPrototypeOf, ownKeys, getGetterKeys, takeSnapshot, attachGetters } from './utils';

export default class StoreGlue {
  private propertyKeys: (string | symbol)[];
  private getterKeys: (string | symbol)[];
  private listeners = new Set<() => void>();
  private snapshot = {};

  constructor(store: object) {
    this.propertyKeys = ownKeys(store);
    this.getterKeys = getGetterKeys(store);
  }

  subscribe(onChange: () => void): () => void {
    this.listeners.add(onChange);
    return () => {
      this.listeners.delete(onChange);
    };
  }

  getSnapshot() {
    return this.snapshot;
  }

  update(store: object): void {
    const snapshot = takeSnapshot(store, this.propertyKeys);

    if (areEqual(snapshot, this.snapshot)) {
      return;
    }

    if (this.getterKeys.length) {
      attachGetters(snapshot, {
        obj: getPrototypeOf(store),
        keys: this.getterKeys,
      });
    }

    this.snapshot = snapshot;
    this.listeners.forEach((listener) => listener());
  }
}
