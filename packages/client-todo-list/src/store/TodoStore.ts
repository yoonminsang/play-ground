import Folder from 'models/Folder';

import Store from './Store';

export type TodoStoreSnapShot = {
  folders: Folder[];
  selectedFolderIndex: number | null;
};

class TodoStore extends Store<TodoStoreSnapShot> {
  private _folders = new Set<Folder>();
  private _selectedFolderIndex: null | number = null;

  constructor() {
    super();
    this.takeSnapshot();
  }

  public addFolder(folder: Folder) {
    this._folders.add(folder);
    this._selectedFolderIndex = this.folders.indexOf(folder);

    this.update();
  }

  public removeFolder(folder: Folder) {
    this._folders.delete(folder);
    if (this._folders.size) {
      this._selectedFolderIndex = 0;
    } else {
      this._selectedFolderIndex = null;
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
      selectedFolderIndex: this._selectedFolderIndex,
    };
  }

  private get folders() {
    return [...this._folders.values()];
  }

  public set selectedFolderIndex(selectedFolderIndex: number | null) {
    this._selectedFolderIndex = selectedFolderIndex;
  }
}

export default TodoStore;
