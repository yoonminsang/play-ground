import Folder from 'models/Folder';
import Task from 'models/Task';

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

  public addTask(folder: Folder, task: Task) {
    this.findFolder(folder)?.addTask(task);

    this.update();
  }

  public removeTask(folder: Folder, task: Task) {
    this.findFolder(folder)?.removeTask(task);

    this.update();
  }

  public toggleTask(folder: Folder, task: Task) {
    this.findFolder(folder)
      ?.tasks.find((v) => v === task)
      ?.toggle();

    this.update();
  }

  private findFolder(folder: Folder) {
    return this.folders.find((v) => v === folder);
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
    this.update();
  }
}

export default TodoStore;
