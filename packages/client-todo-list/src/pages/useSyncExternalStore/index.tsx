import { FC } from 'react';

import { css } from '@emotion/react';

import { TodoList, TodoListInputs } from 'components/Todo';

interface Props {}
const UseSyncExternalStorePage: FC<Props> = () => {
  return (
    <div
      css={() => css`
        margin: 10px;
      `}
    >
      <TodoListInputs />
      <TodoList />
    </div>
  );
};

export default UseSyncExternalStorePage;
