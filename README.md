# react-segmented-picker

[![Build Status](https://travis-ci.com/asvrada/react-segmented-picker.svg?branch=master)](https://travis-ci.com/asvrada/react-segmented-picker)

An iOS style segmented picker for react web

[Demo (the bar next to "All Posts")](https://asvrada.github.io/blog/posts/)

## Install

```shell script
npm i react styled-components --save-dev
npm i react-segmented-picker
```

or

```shell script
yarn add react styled-components -D
yarn add react-segmented-picker
```

## Usage

```js
import React, { useState } from 'react';

import SegmentedPicker from 'react-segmented-picker';

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
```
