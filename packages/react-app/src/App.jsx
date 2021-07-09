import React, { useState } from 'react';
import MyButton from '@monorepo-test/my-button';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hello World</h1>
      <MyButton variant="cta" onClick={() => setCount((c) => c + 1)}>
        count {count}
      </MyButton>
    </div>
  );
};

export default App;
