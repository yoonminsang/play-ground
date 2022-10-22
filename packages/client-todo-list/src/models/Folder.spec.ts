import Folder from './Folder';
import Task from './Task';

const context = describe;

const TITLE = 'title';
const TITLE2 = 'title2';

describe('Folder Model', () => {
  let folder: Folder;
  let task: Task;
  beforeEach(() => {
    Folder.ID = 1;
    Task.ID = 1;
    folder = new Folder({ title: TITLE });
    task = new Task({ title: TITLE });
  });

  it('folder 생성', () => {
    expect(folder.title).toBe(TITLE);
    expect(folder.id).toBe(1);
  });

  it('id auto increment', () => {
    expect(folder.id).toBe(1);
    folder = new Folder({ title: TITLE });
    expect(folder.id).toBe(2);
  });

  it('addTask', () => {
    folder = folder.addTask(task);
    expect(folder.tasks.includes(task)).toBeTruthy();
    expect(folder.tasks.length).toBe(1);
    expect(folder.id).toBe(1);
  });

  it('removeTask', () => {
    folder = folder.addTask(task);
    folder = folder.removeTask(task);
    expect(folder.tasks.includes(task)).toBeFalsy();
    expect(folder.tasks.length).toBe(0);
    expect(folder.id).toBe(1);
  });

  it('toggleTask', () => {
    folder = folder.addTask(task);
    expect(folder.tasks[0].isCompleted).toBeFalsy();
    folder = folder.toggleTask(task) as Folder;
    expect(folder.tasks[0].isCompleted).toBeTruthy();
    expect(folder.id).toBe(1);
  });

  context('when getter, setter', () => {
    it('set title', () => {
      folder = folder.setTitle(TITLE2);
      expect(folder.title).toBe(TITLE2);
      expect(folder.id).toBe(1);
    });
  });
});
