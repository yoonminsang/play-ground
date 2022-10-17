/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { STORE_GLUE_PROPERTY_KEY } from './contants';
import { Store, Action } from './decorators';

@Store()
class MyStore {
  firstName = '';

  lastName = '';

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  @Action()
  changeFirstName(firstName: string) {
    this.firstName = firstName;
  }

  @Action()
  changeLastName(lastName: string) {
    this.lastName = lastName;
  }
}

const context = describe;

describe('action', () => {
  const firstName = 'Peter';
  const handleChange = jest.fn();

  let store: MyStore;

  beforeEach(() => {
    jest.clearAllMocks();

    store = new MyStore();

    const glue = Reflect.get(store, STORE_GLUE_PROPERTY_KEY);
    glue.subscribe(handleChange);
  });

  context('with different state', () => {
    it('calls onChange handler', () => {
      store.changeFirstName(firstName);

      expect(store.firstName).toBe(firstName);

      expect(handleChange).toHaveBeenCalled();
    });
  });

  context('with same state', () => {
    it("doesn't calls onChange handler", () => {
      store.changeFirstName('');

      expect(handleChange).not.toHaveBeenCalled();
    });
  });
});

describe('snapshot', () => {
  let store: MyStore;

  beforeEach(() => {
    jest.clearAllMocks();

    store = new MyStore();
    store.changeFirstName('Peter');
    store.changeLastName('Parker');
  });

  function getSnapshot() {
    const glue = Reflect.get(store, STORE_GLUE_PROPERTY_KEY);
    return glue.getSnapshot();
  }

  it('contains properties', () => {
    const snapshot = getSnapshot();

    expect(snapshot).toEqual({
      firstName: 'Peter',
      lastName: 'Parker',
    });
  });

  it('has getters that uses cache', () => {
    const snapshot = getSnapshot();

    expect(snapshot.fullName).toBe('Peter Parker');
  });
});
