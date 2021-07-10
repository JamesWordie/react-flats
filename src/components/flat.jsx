import React from 'react';

const Flat = ({ flat, onFlatSelect }) => {
  return (
    <div
      className="card"
      style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${flat.imageUrl})`}}
      onClick={() => onFlatSelect(flat)}
    >
      <div className="card-category">{flat.price} {flat.priceCurrency}</div>
      <div className="card-description">
        <h2>{flat.name}</h2>
      </div>
      <a href="#" className="card-link"></a>
    </div>
  );
};

export default Flat;
