class Task {
  private _title: string;
  private _isCompleted: boolean;
  private _id: number;

  public static ID = 1;

  constructor({ title, isCompleted = false, id }: { title: string; isCompleted?: boolean; id?: number }) {
    this._title = title;
    this._isCompleted = isCompleted;
    if (typeof id === 'number') {
      this._id = id;
    } else {
      this._id = Task.ID;
      Task.ID += 1;
    }
  }

  public toggle() {
    return new Task({ title: this._title, isCompleted: !this._isCompleted, id: this._id });
  }

  public get title() {
    return this._title;
  }
  public setTitle(title: string) {
    return new Task({ title, isCompleted: this._isCompleted, id: this._id });
  }
  public get isCompleted() {
    return this._isCompleted;
  }
  public setIsCompleted(isCompleted: boolean) {
    return new Task({ title: this._title, isCompleted, id: this._id });
  }
  public get id() {
    return this._id;
  }
}

export default Task;
