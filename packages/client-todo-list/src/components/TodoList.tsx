/* eslint-disable react/no-array-index-key */
import type { FC } from 'react';

import { css } from '@emotion/react';

import { useTodoStore } from 'hooks/useTodoStore';

interface Props {}
const TodoList: FC<Props> = () => {
  const [{ folders, selectedFolderIndex }] = useTodoStore();

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
          }
        }
      `}
    >
      <div>
        <h1>Folder</h1>
        <ul>
          {[...folders.values()].map((folder, index) => {
            return <li key={index}>{folder.title}</li>;
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
