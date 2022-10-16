import Folder from 'models/Folder';
import Task from 'models/Task';

import TodoStore from './TodoStore';

const TITLE = 'title';

const context = describe;

describe('TodoStore', () => {
  let todoStore: TodoStore;
  beforeEach(() => {
    todoStore = new TodoStore();
  });

  context('when addFolder', () => {
    it('하나를 추가하는 경우 selectedFolderIndex는 0', () => {
      const folder = new Folder(TITLE);

      todoStore.addFolder(folder);

      expect(todoStore.snapshot.folders.includes(folder)).toBeTruthy();
      expect(todoStore.snapshot.folders.length).toBe(1);
      expect(todoStore.snapshot.selectedFolderIndex).toBe(0);
    });

    it('두 개를 추가하는 경우 selectedFolderIndex는 1', () => {
      todoStore.addFolder(new Folder(TITLE));
      todoStore.addFolder(new Folder(TITLE));

      expect(todoStore.snapshot.folders.length).toBe(2);
      expect(todoStore.snapshot.selectedFolderIndex).toBe(1);
    });

    it('n 개를 추가하는 경우 selectedFolderIndex는 n-1', () => {
      const n = 100;
      for (let i = 0; i < n; i++) {
        todoStore.addFolder(new Folder(TITLE));
      }

      expect(todoStore.snapshot.folders.length).toBe(n);
      expect(todoStore.snapshot.selectedFolderIndex).toBe(n - 1);
    });
  });

  context('when removeFolder', () => {
    it('1개에서 1개를 제거하는 경우 selectedFolderIndex는 null', () => {
      const folder = new Folder(TITLE);

      todoStore.addFolder(folder);

      expect(todoStore.snapshot.folders.includes(folder)).toBeTruthy();

      todoStore.removeFolder(folder);

      expect(todoStore.snapshot.folders.includes(folder)).toBeFalsy();
      expect(todoStore.snapshot.folders.length).toBe(0);
      expect(todoStore.snapshot.selectedFolderIndex).toBe(null);
    });

    it('2개에서 1개를 제거하는 경우 selectedFolderIndex는 0', () => {
      const folder = new Folder(TITLE);
      const folder2 = new Folder(TITLE);

      todoStore.addFolder(folder);
      todoStore.addFolder(folder2);

      todoStore.removeFolder(folder);

      expect(todoStore.snapshot.folders.length).toBe(1);
      expect(todoStore.snapshot.selectedFolderIndex).toBe(0);
    });
  });

  context('when addFolder and removeFolder', () => {
    it('1개를 추가하고 1개를 삭제하고 한개를 추가하는 경우 selectedFolderIndex는 0', () => {
      const folder = new Folder(TITLE);
      todoStore.addFolder(folder);
      todoStore.removeFolder(folder);

      const folder2 = new Folder(TITLE);
      todoStore.addFolder(folder2);

      expect(todoStore.snapshot.folders.length).toBe(1);
      expect(todoStore.snapshot.selectedFolderIndex).toBe(0);
    });
    it('2개를 추가하고 1개를 삭제하고 한개를 추가하는 경우 selectedFolderIndex는 1', () => {
      const folder = new Folder(TITLE);
      todoStore.addFolder(folder);
      const folder2 = new Folder(TITLE);
      todoStore.addFolder(folder2);

      todoStore.removeFolder(folder);

      const folder3 = new Folder(TITLE);
      todoStore.addFolder(folder3);

      expect(todoStore.snapshot.folders.length).toBe(2);
      expect(todoStore.snapshot.selectedFolderIndex).toBe(1);
    });
  });

  it('addTask', () => {
    const folder = new Folder(TITLE);
    todoStore.addFolder(folder);
    todoStore.addTask(folder, new Task({ title: TITLE }));

    const task = todoStore.snapshot.folders[0].tasks[0];

    expect(task.title).toBe(TITLE);
    expect(task.isCompleted).toBeFalsy();
  });

  it('removeTask', () => {
    const folder = new Folder(TITLE);
    todoStore.addFolder(folder);
    todoStore.addTask(folder, new Task({ title: TITLE }));

    const task = todoStore.snapshot.folders[0].tasks[0];
    todoStore.removeTask(folder, task);

    expect(todoStore.snapshot.folders[0].tasks.length).toBe(0);
  });

  it('toggleTask', () => {
    const folder = new Folder(TITLE);
    todoStore.addFolder(folder);
    todoStore.addTask(folder, new Task({ title: TITLE }));

    const task = todoStore.snapshot.folders[0].tasks[0];

    expect(task.isCompleted).toBeFalsy();
    todoStore.toggleTask(folder, task);
    expect(task.isCompleted).toBeTruthy();
    todoStore.toggleTask(folder, task);
    expect(task.isCompleted).toBeFalsy();
  });
  // selected case 추가
});
