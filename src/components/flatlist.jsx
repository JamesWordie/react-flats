import React from 'react';
import Flat from './flat';

const Flatlist = ({ flats, onFlatSelect }) => {
  const renderedFlats = flats.map((flat) => {
    return (
      <Flat
        flat={flat}
        key={flat.name}
        onFlatSelect={onFlatSelect}
      />
    );
  });

  return (
    [renderedFlats]
  );
};

export default Flatlist;
