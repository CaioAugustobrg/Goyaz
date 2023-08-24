import React, { useEffect, useState } from 'react';
import { GeoJSON } from 'react-leaflet';

const ExtintasLayer = () => {
  const [geojsonExtintas, setGeojsonExtintas] = useState(null);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setTimeout(() => {
          setGeojsonExtintas(data);
        }, 2000);
      } catch (error) {
        console.error('Error fetching GeoJSON:', error);
      }
    };

    fetchData('https://caioaugusto2.s3.sa-east-1.amazonaws.com/extintas.geojson');
  }, []);

  return geojsonExtintas ? <GeoJSON style={{ color: '#ff6961',zIndex: 499 }} data={geojsonExtintas} /> : null;
};

export default ExtintasLayer;


