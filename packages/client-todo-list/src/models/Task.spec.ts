import Task from './Task';

const context = describe;

const TITLE = 'title';
const TITLE2 = 'title2';

describe('Task Model', () => {
  it('toggle', () => {
    const task = new Task({ title: TITLE });
    task.toggle();
    expect(task.isCompleted).toBe(true);
  });

  context('when task 생성', () => {
    it('title만 넣은 경우', () => {
      const task = new Task({ title: TITLE });
      expect(task.title).toBe(TITLE);
      expect(task.isCompleted).toBe(false);
    });
    it('title, isCompleted를 넣은 경우', () => {
      const task = new Task({ title: TITLE, isCompleted: true });
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
      task.title = TITLE2;
      expect(task.title).toBe(TITLE2);
    });
    it('set isCompleted', () => {
      task.isCompleted = true;
      expect(task.isCompleted).toBe(true);
    });
  });
});
