import { FC, useState } from 'react';

import { css } from '@emotion/react';

import { useTodoStore } from 'hooks/useTodoStore';
import Folder from 'models/Folder';
import Task from 'models/Task';

import Input from './Input';

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
      <Input
        label="folder"
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
      {selectedFolderIndex !== null && (
        <Input
          label="task"
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
      )}
    </div>
  );
};

export default TodoListInputs;
