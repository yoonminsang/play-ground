import Task from './Task';

class Folder {
  private _title: string;
  private _tasks: Set<Task>;

  constructor(title: string) {
    this._title = title;
    this._tasks = new Set<Task>();
  }

  addTask(task: Task) {
    this.tasks.add(task);
  }

  removeTask(task: Task) {
    this.tasks.delete(task);
  }

  get title() {
    return this._title;
  }
  set title(title: string) {
    this._title = title;
  }
  get tasks() {
    return this._tasks;
  }
}

export default Folder;
