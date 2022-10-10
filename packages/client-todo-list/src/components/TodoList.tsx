import type { FC } from 'react';

import { css } from '@emotion/react';

interface Props {}
const TodoList: FC<Props> = () => {
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
          <li>folder1</li>
          <li>folder2</li>
          <li>folder3</li>
        </ul>
      </div>
      <div>
        <h1>Task</h1>
        <ul>
          <li>task1</li>
          <li>task2</li>
          <li>task3</li>
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
