import Task from './Task';

class Folder {
  private _title: string;
  private _tasks: Task[];

  constructor(title: string, tasks: Task[] = []) {
    this._title = title;
    this._tasks = tasks;
  }

  public addTask(task: Task) {
    return new Folder(this.title, [...this._tasks, task]);
  }

  public removeTask(task: Task) {
    return new Folder(
      this.title,
      this._tasks.filter((_task) => _task !== task),
    );
  }

  get title() {
    return this._title;
  }
  setTitle(title: string) {
    return new Folder(title, this._tasks);
  }
  get tasks() {
    return this._tasks;
  }
}

export default Folder;
