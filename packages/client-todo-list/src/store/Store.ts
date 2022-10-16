abstract class Store<Snapshot> {
  public listeners = new Set<() => void>();
  public snapshot = {} as Snapshot;

  public addListener(listener: () => void) {
    this.listeners.add(listener);
  }

  public removeListener(listener: () => void) {
    this.listeners.delete(listener);
  }

  public getSnapshot() {
    return this.snapshot;
  }

  public publish() {
    this.listeners.forEach((listener) => listener());
  }
}

export default Store;
