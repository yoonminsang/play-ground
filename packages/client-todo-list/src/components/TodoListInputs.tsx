import { FC, useState } from 'react';

import { css } from '@emotion/react';

import { useTodoStore } from 'hooks/useTodoStore';
import Folder from 'models/Folder';
import Task from 'models/Task';

interface Props {}
const TodoListInputs: FC<Props> = () => {
  const [{ selectedFolderIndex }, todoStore] = useTodoStore();

  const [folderValue, setFolderValue] = useState<string>('');
  const [taskValue, setTaskValue] = useState<string>('');

  return (
    <div
      css={(theme) => css`
        display: flex;
        gap: 10px;
        .input-wrapper {
          display: flex;
          flex-direction: column;
          gap: 3px;
          label {
            ${theme.typo.labelM}
          }
          input {
            border: 1px solid ${theme.color.grey500};
            border-radius: 10px;
            padding: 0 5px;
            ${theme.typo.bodyM}
          }
        }
      `}
    >
      <div className="input-wrapper">
        <label htmlFor="folder">folder</label>
        <input
          id="folder"
          type="text"
          value={folderValue}
          onChange={(e) => setFolderValue(e.target.value)}
          onKeyUp={(e) => {
            if (e.code === 'Enter') {
              const folder = new Folder(folderValue);
              todoStore.addFolder(folder);
              setFolderValue('');
            }
          }}
        />
      </div>
      {selectedFolderIndex !== null && (
        <div className="input-wrapper">
          <label htmlFor="task">task</label>
          <input
            id="task"
            type="text"
            value={taskValue}
            onChange={(e) => setTaskValue(e.target.value)}
            onKeyUp={(e) => {
              if (e.code === 'Enter') {
                todoStore.folders[selectedFolderIndex].addTask(new Task({ title: taskValue }));
                setTaskValue('');
              }
            }}
          />
        </div>
      )}
    </div>
  );
};

export default TodoListInputs;
