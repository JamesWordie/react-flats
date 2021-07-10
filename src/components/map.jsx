import React from "react";
import GoogleMapReact from 'google-map-react';

const Marker = () => {
  return (
    <div className="marker">
    </div>
  );
};

export default function SimpleMap({ flat }){
  const defaultProps = {
    center: {
      lat: 48.858093,
      lng: 2.294694
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      <Marker
        lat={(flat) ? flat.lat : ""}
        lng={(flat) ? flat.lng : ""}
      />

      </GoogleMapReact>
    </div>
  );
}
