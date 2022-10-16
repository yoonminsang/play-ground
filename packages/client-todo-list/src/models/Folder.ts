import Task from './Task';

class Folder {
  private _title: string;
  private _tasks: Set<Task>;

  constructor(title: string) {
    this._title = title;
    this._tasks = new Set<Task>();
  }

  public addTask(task: Task) {
    this._tasks.add(task);
  }

  public removeTask(task: Task) {
    this._tasks.delete(task);
  }

  get title() {
    return this._title;
  }
  set title(title: string) {
    this._title = title;
  }
  get tasks() {
    return [...this._tasks.values()];
  }
}

export default Folder;
