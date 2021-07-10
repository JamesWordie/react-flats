import React, { useState } from 'react';
import flats from './flats';
import Flatlist from './flatlist';
import SimpleMap from './map';

const App = () => {
  const [selectedFlat, setSelectedFlat] = useState(null);

  return (
    <div className="container">
      <div className="flat-list">
        <Flatlist
          flats={flats}
          onFlatSelect={setSelectedFlat}
        />
      </div>
      <div className="map-container">
        <SimpleMap flat={selectedFlat} />
      </div>
    </div>
  );
};

export default App;
