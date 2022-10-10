import { FC, FormEvent, useCallback, useState } from 'react';

import { useTodoStore } from 'hooks/useTodoStore';
import Folder from 'models/Folder';
import Task from 'models/Task';
import { Input } from 'components/common';

import * as S from './style';

interface Props {}
const TodoListInputs: FC<Props> = () => {
  const [{ folders, selectedFolderIndex }, todoStore] = useTodoStore();

  const [folderValue, setFolderValue] = useState<string>('');
  const [taskValue, setTaskValue] = useState<string>('');

  const handleFolderSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const folder = new Folder(folderValue);
      todoStore.addFolder(folder);
      setFolderValue('');
    },
    [folderValue, todoStore],
  );

  const handleTaskSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      todoStore.addTask(folders[selectedFolderIndex as number], new Task({ title: taskValue }));
      setTaskValue('');
    },
    [folders, selectedFolderIndex, taskValue, todoStore],
  );

  return (
    <div css={S.wrapperStyle}>
      <form onSubmit={handleFolderSubmit}>
        <Input
          label="folder"
          type="text"
          value={folderValue}
          onChange={(e) => setFolderValue(e.target.value)}
          required
        />
      </form>
      {selectedFolderIndex !== null && (
        <form onSubmit={handleTaskSubmit}>
          <Input label="task" type="text" value={taskValue} onChange={(e) => setTaskValue(e.target.value)} required />
        </form>
      )}
    </div>
  );
};

export default TodoListInputs;
