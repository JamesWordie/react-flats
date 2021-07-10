import React from 'react';
import Flat from './flat';

const Flatlist = ({ flats }) => {
  const renderedFlats = flats.map((flat) => {
    return (
      <div>
        <Flat flat={flat}  key={flat.name}/>
      </div>
    );
  });

  return (
    <div>
      {renderedFlats}
    </div>
  );
};

export default Flatlist;
