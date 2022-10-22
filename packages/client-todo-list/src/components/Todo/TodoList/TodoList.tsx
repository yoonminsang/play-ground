import type { FC } from 'react';

import * as S from './style';
import TodoListFolder from './TodoListFolders';
import TodoListTask from './TodoListTasks';

interface Props {}

const TodoList: FC<Props> = () => {
  return (
    <S.Wrapper>
      <TodoListFolder />
      <TodoListTask />
    </S.Wrapper>
  );
};

export default TodoList;
