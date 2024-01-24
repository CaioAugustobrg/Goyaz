import React, { useEffect, useState } from 'react';
import { GeoJSON } from 'react-leaflet';

const ExistentesLayer = () => {
	const [geojsonExistentes, setGeojsonExistentes] = useState(null);

	useEffect(() => {
		const fetchData = async (url) => {
			try {
				const response = await fetch(url);
				const data = await response.json();
				setTimeout(() => {
					setGeojsonExistentes(data);
				}, 2000);
			} catch (error) {
				console.error('Error fetching GeoJSON:', error);
			}
		};

		fetchData('https://caioaugusto2.s3.sa-east-1.amazonaws.com/existentes.geojson');
	}, []);

	return geojsonExistentes ? <GeoJSON style={{color: '#ff7f00',zIndex: 499}} data={geojsonExistentes} /> : null;
};

export default ExistentesLayer;
