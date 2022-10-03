import type { FC } from 'react';

import { Button } from '@common/components';

const App: FC = () => {
  return (
    <div className="App">
      앱
      <Button size="md" variant="filled" color="red">
        button
      </Button>
    </div>
  );
};

export default App;
