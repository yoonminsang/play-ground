import { FC, FormEvent, useCallback, useState } from 'react';

import Folder from 'models/Folder';
import Task from 'models/Task';
import { Input } from 'components/common';
import { useStore } from 'lib/store';
import { todoStore } from 'store/TodoStore';

import * as S from './style';

interface Props {}
const TodoListInputs: FC<Props> = () => {
  const [
    {
      snapshot: { folders, selectedFolderIndex },
    },
    store,
  ] = useStore(todoStore);
  console.log(folders, selectedFolderIndex);

  const [folderValue, setFolderValue] = useState<string>('');
  const [taskValue, setTaskValue] = useState<string>('');

  const handleFolderSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const folder = new Folder(folderValue);
      store.addFolder(folder);
      setFolderValue('');
    },
    [folderValue, store],
  );

  const handleTaskSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      store.addTask(folders[selectedFolderIndex as number], new Task({ title: taskValue }));
      setTaskValue('');
    },
    [folders, selectedFolderIndex, taskValue, store],
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
