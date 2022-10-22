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
      snapshot: { selectedFolderId },
      currentFolder,
    },
    store,
  ] = useStore(todoStore);

  const [folderValue, setFolderValue] = useState<string>('');
  const [taskValue, setTaskValue] = useState<string>('');

  const handleFolderSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const folder = new Folder({ title: folderValue });
      store.addFolder(folder);
      setFolderValue('');
    },
    [folderValue, store],
  );

  const handleTaskSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      store.addTask(currentFolder as Folder, new Task({ title: taskValue }));
      setTaskValue('');
    },
    [store, currentFolder, taskValue],
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
      {selectedFolderId !== null && (
        <form onSubmit={handleTaskSubmit}>
          <Input label="task" type="text" value={taskValue} onChange={(e) => setTaskValue(e.target.value)} required />
        </form>
      )}
    </div>
  );
};

export default TodoListInputs;
