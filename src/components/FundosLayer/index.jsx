import React, { useEffect, useState } from 'react';
import { GeoJSON } from 'react-leaflet';

const FundosLayer = () => {
	const [geojsonFundos, setGeojsonFundos] = useState(null);

	useEffect(() => {
		const fetchData = async (url) => {
			try {
				const response = await fetch(url);
				const data = await response.json();
				setGeojsonFundos(data);
      
			} catch (error) {
				console.error('Error fetching GeoJSON:', error);
			}
		};

		fetchData('https://caioaugusto2.s3.sa-east-1.amazonaws.com/fundos.geojson');
	}, []);

	return geojsonFundos ? <GeoJSON style={{ zIndex: 1}} data={geojsonFundos}  /> : null;
};

export default FundosLayer;
