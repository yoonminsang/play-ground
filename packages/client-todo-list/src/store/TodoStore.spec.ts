import Folder from 'models/Folder';

import TodoStore from './TodoStore';

const TITLE = 'title';

describe('TodoStore', () => {
  it('defualt', () => {
    const todoStore = new TodoStore();

    const handleChange = jest.fn();

    todoStore.addListener(handleChange);

    const folder = new Folder(TITLE);
    todoStore.addFolder(folder);

    expect(handleChange).toHaveBeenCalled();

    expect(todoStore.getSnapshot().folders.has(folder)).toBeTruthy();
  });
});
