import Folder from 'models/Folder';

import Store from './Store';

export type TodoStoreSnapShot = {
  folders: Set<Folder>;
};

class TodoStore extends Store<TodoStoreSnapShot> {
  folders = new Set<Folder>();

  constructor() {
    super();
    this.takeSnapshot();
  }

  public addFolder(folder: Folder) {
    this.folders.add(folder);

    this.update();
  }

  private update() {
    this.takeSnapshot();
    this.publish();
  }

  private takeSnapshot() {
    this.snapshot = {
      folders: this.folders,
    };
  }
}

export default TodoStore;
