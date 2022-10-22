import { Action, Store } from 'lib/store';
import Folder from 'models/Folder';
import Task from 'models/Task';

@Store()
class TodoStore {
  private _folders: Folder[] = [];
  private _selectedFolderIndex: null | number = null;

  @Action()
  public addFolder(folder: Folder) {
    this._folders = [...this._folders, folder];
    this._selectedFolderIndex = this._folders.indexOf(folder);
  }

  @Action()
  public removeFolder(folder: Folder) {
    this._folders = this._folders.filter((_folder) => _folder !== folder);
    if (this._folders.length) {
      this._selectedFolderIndex = 0;
    } else {
      this._selectedFolderIndex = null;
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
  public setSelectedFolderIndex(selectedFolderIndex: number | null) {
    this._selectedFolderIndex = selectedFolderIndex;
  }

  private findFolder(folder: Folder) {
    return this._folders.find((v) => v === folder);
  }

  // TODO: 스냅샷이 필요할까? 그냥 getter만 쓰면 어떨까 혹은 멤버변수를 public으로 관리하면 어떨까...
  public get snapshot() {
    return {
      folders: this._folders,
      selectedFolderIndex: this._selectedFolderIndex,
    };
  }
}

export default TodoStore;

export const todoStore = new TodoStore();
