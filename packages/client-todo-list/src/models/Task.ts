class Task {
  private _title: string;
  private _isCompleted: boolean;

  constructor({ title, isCompleted = false }: { title: string; isCompleted?: boolean }) {
    this._title = title;
    this._isCompleted = isCompleted;
  }

  public toggle() {
    this._isCompleted = !this._isCompleted;
  }

  get title() {
    return this._title;
  }
  set title(title: string) {
    this._title = title;
  }
  get isCompleted() {
    return this._isCompleted;
  }
  set isCompleted(isCompleted: boolean) {
    this._isCompleted = isCompleted;
  }
}

export default Task;
