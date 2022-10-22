import Task from './Task';

class Folder {
  private _title: string;
  private _tasks: Task[];
  private _id: number;

  public static ID = 1;

  constructor({ title, tasks = [], id }: { title: string; tasks?: Task[]; id?: number }) {
    this._title = title;
    this._tasks = tasks;
    if (typeof id === 'number') {
      this._id = id;
    } else {
      this._id = Folder.ID;
      Folder.ID += 1;
    }
  }

  public addTask(task: Task) {
    return new Folder({ title: this.title, tasks: [...this._tasks, task], id: this._id });
  }

  public removeTask(task: Task) {
    return new Folder({ title: this.title, tasks: this._tasks.filter((_task) => _task !== task), id: this._id });
  }

  public toggleTask(task: Task) {
    const findTask = this.findTask(task);
    if (!findTask) return;
    return new Folder({
      title: this.title,
      tasks: this._tasks.map((_task) => {
        if (_task === task) return findTask.toggle();
        return _task;
      }),
      id: this._id,
    });
  }

  private findTask(task: Task) {
    return this._tasks.find((_task) => _task === task);
  }

  get title() {
    return this._title;
  }
  setTitle(title: string) {
    return new Folder({ title, tasks: this._tasks, id: this._id });
  }
  get tasks() {
    return this._tasks;
  }
  get id() {
    return this._id;
  }
}

export default Folder;
