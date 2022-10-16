import { useSyncExternalStore } from 'react';

import TodoStore, { TodoStoreSnapShot } from 'store/TodoStore';

const todoStore = new TodoStore();

export function useTodoStore(): [TodoStoreSnapShot, TodoStore] {
  const snapshot = useSyncExternalStore(
    (onStoreChange) => {
      todoStore.addListener(onStoreChange);
      return () => todoStore.removeListener(onStoreChange);
    },
    () => todoStore.getSnapshot(),
  );
  return [snapshot, todoStore];
}
