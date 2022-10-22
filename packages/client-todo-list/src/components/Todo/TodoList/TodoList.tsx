/* eslint-disable react/no-array-index-key */
import { FC, useCallback } from 'react';

import classNames from 'classnames';

import { useStore } from 'lib/store';
import { todoStore } from 'store/TodoStore';
import Folder from 'models/Folder';

import * as S from './style';

interface Props {}
const TodoList: FC<Props> = () => {
  const [
    {
      snapshot: { folders, selectedFolderId },
    },
    store,
  ] = useStore(todoStore);

  const getCurrentFolder = useCallback(() => {
    return folders.find((folder) => folder.id === (selectedFolderId as number)) as Folder;
  }, [folders, selectedFolderId]);

  return (
    <div css={S.wrapperStyle}>
      <div>
        <h1>Folder</h1>
        <ul>
          {[...folders.values()].map((folder) => {
            return (
              <li key={folder.id} className={classNames({ selected: selectedFolderId === folder.id })}>
                <button
                  type="button"
                  onClick={() => {
                    store.setSelectedFolderId(folder.id);
                  }}
                >
                  {folder.title}
                </button>
                <button
                  className="btn-remove"
                  type="button"
                  onClick={() => {
                    store.removeFolder(folder);
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
          {selectedFolderId !== null &&
            getCurrentFolder().tasks.map((task) => {
              const { title, isCompleted } = task;
              return (
                <li key={task.id}>
                  <button
                    type="button"
                    onClick={() => {
                      store.toggleTask(getCurrentFolder(), task);
                    }}
                  >
                    {isCompleted ? 'complete' : 'incomplete'} {title}
                  </button>
                  <button
                    className="btn-remove"
                    type="button"
                    onClick={() => {
                      store.removeTask(getCurrentFolder(), task);
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
