import { Action, Store } from 'lib/store';
import Folder from 'models/Folder';
import Task from 'models/Task';

@Store()
class TodoStore {
  private _folders: Folder[] = [];
  private _selectedFolderId: null | number = null;

  @Action()
  public addFolder(folder: Folder) {
    this._folders = [...this._folders, folder];
    this._selectedFolderId = folder.id;
  }

  @Action()
  public removeFolder(folder: Folder) {
    this._folders = this._folders.filter((_folder) => _folder !== folder);
    if (this._folders.length) {
      this._selectedFolderId = this._folders[0].id;
    } else {
      this._selectedFolderId = null;
    }
  }

  @Action()
  public addTask(folder: Folder, task: Task) {
    const findFolder = this.findFolder(folder);
    if (!findFolder) return;
    this._folders = this._folders.map((_folder) => {
      if (_folder === findFolder) return findFolder.addTask(task);
      return _folder;
    });
  }

  @Action()
  public removeTask(folder: Folder, task: Task) {
    const findFolder = this.findFolder(folder);
    if (!findFolder) return;
    this._folders = this._folders.map((_folder) => {
      if (_folder === findFolder) return findFolder.removeTask(task);
      return _folder;
    });
  }

  @Action()
  public toggleTask(folder: Folder, task: Task) {
    const findFolder = this.findFolder(folder);
    if (!findFolder) return;
    this._folders = this._folders.map((_folder) => {
      if (_folder === findFolder) return findFolder.toggleTask(task) as Folder;
      return _folder;
    });
  }

  @Action()
  public setSelectedFolderId(selectedFolderIndex: number | null) {
    this._selectedFolderId = selectedFolderIndex;
  }

  private findFolder(folder: Folder) {
    return this._folders.find((v) => v === folder);
  }

  public get snapshot() {
    return {
      folders: this._folders,
      selectedFolderId: this._selectedFolderId,
    };
  }
}

export default TodoStore;

export const todoStore = new TodoStore();
