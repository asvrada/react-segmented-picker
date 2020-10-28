import React, { useState } from 'react';

import SegmentedPicker from './components/SegmentedPicker';

// Demo App
function App() {
  const [selection, setSelection] = useState(0);
  const options = ['Apple', 'Orange', 'Pear', 'Watermelon'];

  return (
    <div className="App">
      <p>You selected</p>
      <p>#{selection}: {options[selection]}</p>

      <SegmentedPicker
        options={options}
        selection={selection}
        onSelectionChange={(newSelection) => {
          setSelection(newSelection);
        }}
      />
    </div>
  );
}

export default App;
