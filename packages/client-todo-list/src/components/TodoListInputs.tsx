import { FC, useState } from 'react';

import { css } from '@emotion/react';

import { useTodoStore } from 'hooks/useTodoStore';
import Folder from 'models/Folder';
import Task from 'models/Task';

import Input from './Input';

interface Props {}
const TodoListInputs: FC<Props> = () => {
  const [{ folders, selectedFolderIndex }, todoStore] = useTodoStore();

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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const folder = new Folder(folderValue);
          todoStore.addFolder(folder);
          setFolderValue('');
        }}
      >
        <Input
          label="folder"
          type="text"
          value={folderValue}
          onChange={(e) => setFolderValue(e.target.value)}
          required
        />
      </form>
      {selectedFolderIndex !== null && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            todoStore.addTask(folders[selectedFolderIndex], new Task({ title: taskValue }));
            setTaskValue('');
          }}
        >
          <Input label="task" type="text" value={taskValue} onChange={(e) => setTaskValue(e.target.value)} required />
        </form>
      )}
    </div>
  );
};

export default TodoListInputs;
