import type { FC } from 'react';

import { useStore } from 'lib/store';
import { todoStore } from 'store/TodoStore';

import * as S from './style';

interface Props {}

const TodoListTask: FC<Props> = () => {
  const [
    {
      snapshot: { selectedFolderId },
      currentFolder,
    },
    store,
  ] = useStore(todoStore);

  return (
    <S.InnerWrapper>
      <h1>Task</h1>
      <ul>
        {selectedFolderId !== null &&
          currentFolder &&
          currentFolder.tasks.map((task) => {
            const { title, isCompleted } = task;
            return (
              <li key={task.id}>
                <button
                  type="button"
                  onClick={() => {
                    store.toggleTask(currentFolder, task);
                  }}
                >
                  {isCompleted ? 'complete' : 'incomplete'} {title}
                </button>
                <button
                  className="btn-remove"
                  type="button"
                  onClick={() => {
                    store.removeTask(currentFolder, task);
                  }}
                >
                  X
                </button>
              </li>
            );
          })}
      </ul>
    </S.InnerWrapper>
  );
};

export default TodoListTask;
