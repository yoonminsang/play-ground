/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useSyncExternalStore } from 'react';

import { STORE_GLUE_PROPERTY_KEY } from './contants';
import { NonFunctionProperties } from './types';

export default function useStore<Store extends object>(store: Store): [NonFunctionProperties<Store>, Store] {
  const glue = Reflect.get(store, STORE_GLUE_PROPERTY_KEY);
  if (!glue) {
    throw new Error('Cannot find store glue');
  }

  const snapshot: NonFunctionProperties<Store> = useSyncExternalStore(
    glue.subscribe.bind(glue),
    glue.getSnapshot.bind(glue),
  );

  return [snapshot, store];
}
