class Task {
  private _title: string;
  private _isCompleted: boolean;

  constructor({ title, isCompleted = false }: { title: string; isCompleted?: boolean }) {
    this._title = title;
    this._isCompleted = isCompleted;
  }

  toggle() {
    this._isCompleted = !this._isCompleted;
  }

  get info() {
    return { title: this.title, isCompleted: this.isCompleted };
  }

  set title(title: string) {
    this._title = title;
  }
  get title() {
    return this._title;
  }
  set isCompleted(isCompleted: boolean) {
    this._isCompleted = isCompleted;
  }
  get isCompleted() {
    return this._isCompleted;
  }
}

export default Task;
