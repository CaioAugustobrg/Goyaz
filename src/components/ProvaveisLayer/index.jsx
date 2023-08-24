import React, { useEffect, useState } from 'react';
import { GeoJSON } from 'react-leaflet';
import axios from 'axios';

const ProvaveisLayer = () => {
  const [geojsonProvaveis, setGeojsonProvaveis] = useState(null);

  useEffect(() => {
    const fetchGeoJSON = async (url) => {
      try {
        const response = await axios.get(url);
        const data = response.data;
        setGeojsonProvaveis(data);
      } catch (error) {
        console.error('Error fetching GeoJSON:', error);
      }
    };

    fetchGeoJSON('https://caioaugusto2.s3.sa-east-1.amazonaws.com/provaveis.geojson');
  }, []);

  return geojsonProvaveis ? <GeoJSON style={{ color: '#a52a2a', zIndex: 499 }} data={geojsonProvaveis} /> : null;
};

export default ProvaveisLayer;
