/* eslint-disable react/no-array-index-key */
import { FC, useCallback } from 'react';

import classNames from 'classnames';

import { useTodoStore } from 'hooks/useTodoStore';

import * as S from './style';

interface Props {}
const TodoList: FC<Props> = () => {
  const [{ folders, selectedFolderIndex }, todoStore] = useTodoStore();

  const getCurrentFolder = useCallback(() => {
    return folders[selectedFolderIndex as number];
  }, [folders, selectedFolderIndex]);

  return (
    <div css={S.wrapperStyle}>
      <div>
        <h1>Folder</h1>
        <ul>
          {[...folders.values()].map((folder, index) => {
            return (
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              <li key={index} className={classNames({ selected: selectedFolderIndex === index })}>
                <button
                  type="button"
                  onClick={() => {
                    todoStore.selectedFolderIndex = index;
                  }}
                >
                  {folder.title}
                </button>
                <button
                  className="btn-remove"
                  type="button"
                  onClick={() => {
                    todoStore.removeFolder(folder);
                  }}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h1>Task</h1>
        <ul>
          {selectedFolderIndex !== null &&
            getCurrentFolder().tasks.map((task, index) => {
              const { title, isCompleted } = task;
              return (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => {
                      todoStore.toggleTask(getCurrentFolder(), task);
                    }}
                  >
                    {isCompleted ? 'complete' : 'incomplete'} {title}
                  </button>
                  <button
                    className="btn-remove"
                    type="button"
                    onClick={() => {
                      todoStore.removeTask(getCurrentFolder(), task);
                    }}
                  >
                    X
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
