import StoreGlue from './StoreGlue';
import { Store } from './decorators';

@Store()
class MyStore {
  name: string;

  constructor({ name }: { name: string }) {
    this.name = name;
  }
}

test('StoreGlue', () => {
  const name = 'Peter Parker';
  const newName = 'Peter';
  const handleChange = jest.fn();

  const target = new MyStore({ name });

  const glue = new StoreGlue(target);

  glue.subscribe(handleChange);

  const newTarget = new MyStore({ name: newName });

  glue.update(newTarget);

  const snapshot = {
    name: newName,
  };

  expect(handleChange).toHaveBeenCalled();

  expect(glue.getSnapshot()).toEqual(snapshot);
});
