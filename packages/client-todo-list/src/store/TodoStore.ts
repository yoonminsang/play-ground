import { Action, Store } from 'lib/store';
import Folder from 'models/Folder';
import Task from 'models/Task';

@Store()
class TodoStore {
  private _folders = new Set<Folder>();
  private _selectedFolderIndex: null | number = null;

  @Action()
  public addFolder(folder: Folder) {
    this._folders.add(folder);
    this._selectedFolderIndex = this.folders.indexOf(folder);
  }

  @Action()
  public removeFolder(folder: Folder) {
    this._folders.delete(folder);
    if (this._folders.size) {
      this._selectedFolderIndex = 0;
    } else {
      this._selectedFolderIndex = null;
    }
  }

  @Action()
  public addTask(folder: Folder, task: Task) {
    this.findFolder(folder)?.addTask(task);
  }

  @Action()
  public removeTask(folder: Folder, task: Task) {
    this.findFolder(folder)?.removeTask(task);
  }

  @Action()
  public toggleTask(folder: Folder, task: Task) {
    this.findFolder(folder)
      ?.tasks.find((v) => v === task)
      ?.toggle();
  }

  private get folders() {
    return [...this._folders.values()];
  }

  @Action()
  public setSelectedFolderIndex(selectedFolderIndex: number | null) {
    this._selectedFolderIndex = selectedFolderIndex;
  }

  private findFolder(folder: Folder) {
    return this.folders.find((v) => v === folder);
  }

  // TODO: 옵저버패턴적용, abstract 적용?
  public get snapshot() {
    return {
      folders: this.folders,
      selectedFolderIndex: this._selectedFolderIndex,
    };
  }
}

export default TodoStore;

export const todoStore = new TodoStore();
