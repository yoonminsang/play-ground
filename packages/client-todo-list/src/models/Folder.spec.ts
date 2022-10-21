import Folder from './Folder';
import Task from './Task';

const context = describe;

const TITLE = 'title';
const TITLE2 = 'title2';

describe('Folder Model', () => {
  let folder: Folder;
  let task: Task;
  beforeEach(() => {
    folder = new Folder(TITLE);
    task = new Task({ title: TITLE });
  });

  it('folder 생성', () => {
    expect(folder.title).toBe(TITLE);
  });

  it('addTask', () => {
    folder = folder.addTask(task);
    expect(folder.tasks.includes(task)).toBeTruthy();
    expect(folder.tasks.length).toBe(1);
  });

  it('removeTask', () => {
    folder = folder.addTask(task);
    folder = folder.removeTask(task);
    expect(folder.tasks.includes(task)).toBeFalsy();
    expect(folder.tasks.length).toBe(0);
  });

  it('toggleTask', () => {
    folder = folder.addTask(task);
    expect(folder.tasks[0].isCompleted).toBeFalsy();
    folder = folder.toggleTask(task) as Folder;
    expect(folder.tasks[0].isCompleted).toBeTruthy();
  });

  context('when getter, setter', () => {
    it('set title', () => {
      folder = folder.setTitle(TITLE2);
      expect(folder.title).toBe(TITLE2);
    });
  });
});
