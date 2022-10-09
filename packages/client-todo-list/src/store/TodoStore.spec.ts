import Folder from 'models/Folder';

import TodoStore from './TodoStore';

const TITLE = 'title';

describe('TodoStore', () => {
  let handleChange: jest.Mock;
  let todoStore: TodoStore;
  beforeAll(() => {
    handleChange = jest.fn();
  });
  beforeEach(() => {
    todoStore = new TodoStore();
  });

  it('addFolder', () => {
    todoStore.addListener(handleChange);

    const folder = new Folder(TITLE);

    todoStore.addFolder(folder);

    expect(handleChange).toHaveBeenCalled();
    expect(todoStore.getSnapshot().folders.has(folder)).toBeTruthy();
  });

  it('removeFolder', () => {
    todoStore.addListener(handleChange);

    const folder = new Folder(TITLE);

    todoStore.addFolder(folder);

    expect(handleChange).toHaveBeenCalled();
    expect(todoStore.getSnapshot().folders.has(folder)).toBeTruthy();

    todoStore.removeFolder(folder);

    expect(todoStore.getSnapshot().folders.has(folder)).toBeFalsy();
  });
});
