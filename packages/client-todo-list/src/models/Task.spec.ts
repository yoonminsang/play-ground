import Task from './Task';

const context = describe;

const TITLE = 'title';
const TITLE2 = 'title2';

describe('Task Model', () => {
  let task: Task;

  it('toggle', () => {
    task = new Task({ title: TITLE });
    task = task.toggle();
    expect(task.isCompleted).toBe(true);
  });

  context('when task 생성', () => {
    it('title만 넣은 경우', () => {
      task = new Task({ title: TITLE });
      expect(task.title).toBe(TITLE);
      expect(task.isCompleted).toBe(false);
    });
    it('title, isCompleted를 넣은 경우', () => {
      task = new Task({ title: TITLE, isCompleted: true });
      expect(task.title).toBe(TITLE);
      expect(task.isCompleted).toBe(true);
    });
  });

  context('when getter, setter', () => {
    let task: Task;
    beforeEach(() => {
      task = new Task({ title: TITLE });
    });
    it('set title', () => {
      task = task.setTitle(TITLE2);
      expect(task.title).toBe(TITLE2);
    });
    it('set isCompleted', () => {
      task = task.setIsCompleted(true);
      expect(task.isCompleted).toBe(true);
    });
  });
});
