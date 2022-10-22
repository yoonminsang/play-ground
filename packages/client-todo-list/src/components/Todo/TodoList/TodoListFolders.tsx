import type { FC } from 'react';

import classNames from 'classnames';

import { useStore } from 'lib/store';
import { todoStore } from 'store/TodoStore';

import * as S from './style';

interface Props {}

// TODO: TodoListFolders를 TodoListFolder로 변경(왜인지 모르갰는데 변경하면 에러가 뜸)
const TodoListFolder: FC<Props> = () => {
  const [
    {
      snapshot: { folders, selectedFolderId },
    },
    store,
  ] = useStore(todoStore);

  return (
    <S.InnerWrapper>
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
    </S.InnerWrapper>
  );
};

export default TodoListFolder;
