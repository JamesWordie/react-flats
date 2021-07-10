import React, { useState } from 'react';
import flats from './flats';
import Flatlist from './flatlist';

const App = () => {

  return (
    <div className="container">
      <Flatlist flats={flats} />
    </div>
  );
};

export default App;
