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
    folder.addTask(task);
    expect(folder.tasks.has(task)).toBeTruthy();
    expect(folder.tasks.size).toBe(1);
  });

  it('removeTask', () => {
    folder.addTask(task);
    folder.removeTask(task);
    expect(folder.tasks.has(task)).toBeFalsy();
    expect(folder.tasks.size).toBe(0);
  });

  context('when getter, setter', () => {
    it('set title', () => {
      folder.title = TITLE2;
      expect(folder.title).toBe(TITLE2);
    });
  });
});
