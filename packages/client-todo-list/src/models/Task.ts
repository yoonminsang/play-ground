class Task {
  private _title: string;
  private _isCompleted: boolean;

  constructor({ title, isCompleted = false }: { title: string; isCompleted?: boolean }) {
    this._title = title;
    this._isCompleted = isCompleted;
  }

  public toggle() {
    return new Task({ title: this._title, isCompleted: !this._isCompleted });
  }

  public get title() {
    return this._title;
  }
  public setTitle(title: string) {
    return new Task({ title, isCompleted: this._isCompleted });
  }
  public get isCompleted() {
    return this._isCompleted;
  }
  public setIsCompleted(isCompleted: boolean) {
    return new Task({ title: this._title, isCompleted });
  }
}

export default Task;
