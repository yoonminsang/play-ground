import Folder from 'models/Folder';

import Store from './Store';

export type TodoStoreSnapShot = {
  folders: Set<Folder>;
  selectedFolderIndex: number | null;
};

class TodoStore extends Store<TodoStoreSnapShot> {
  public folders = new Set<Folder>();
  public selectedFolderIndex: null | number = null;

  constructor() {
    super();
    this.takeSnapshot();
  }

  public addFolder(folder: Folder) {
    this.folders.add(folder);
    this.selectedFolderIndex = [...this.folders.values()].indexOf(folder);

    this.update();
  }

  public removeFolder(folder: Folder) {
    this.folders.delete(folder);
    if (this.folders.size) {
      this.selectedFolderIndex = 0;
    } else {
      this.selectedFolderIndex = null;
    }

    this.update();
  }

  private update() {
    this.takeSnapshot();
    this.publish();
  }

  private takeSnapshot() {
    this.snapshot = {
      folders: this.folders,
      selectedFolderIndex: this.selectedFolderIndex,
    };
  }
}

export default TodoStore;
