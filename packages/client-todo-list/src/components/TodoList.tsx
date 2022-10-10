/* eslint-disable react/no-array-index-key */
import type { FC } from 'react';

import { css } from '@emotion/react';
import classNames from 'classnames';

import { useTodoStore } from 'hooks/useTodoStore';

interface Props {}
const TodoList: FC<Props> = () => {
  const [{ folders, selectedFolderIndex }, todoStore] = useTodoStore();

  return (
    <div
      css={(theme) => css`
        display: flex;
        margin: 20px;
        > div {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        div:nth-of-type(1) {
          flex: 1;
        }
        div:nth-of-type(2) {
          flex: 5;
        }
        h1 {
          ${theme.typo.titleL}
        }
        ul {
          display: flex;
          flex-direction: column;
          gap: 5px;
          li {
            list-style: inside;
            &.selected {
              color: ${theme.color.blue500};
            }
          }
        }
      `}
    >
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
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h1>Task</h1>
        <ul>
          {selectedFolderIndex !== null &&
            folders[selectedFolderIndex].tasks.map(({ title, isCompleted }, index) => {
              return (
                <li key={index}>
                  {isCompleted ? 'complete' : 'incomplete'}
                  {title}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
