/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {  LayersControl, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import ReactDOMServer from 'react-dom/server';
function CustomMarkerIcon() {
	return <FaMapMarkerAlt style={{ color: '#6498ed', fontSize: 38 }} />;
}

const AllCities = ({ citiesData, onClick }) => {
	const [showLayers, setShowLayers] = useState(false);

	const handleClick = (cityCoordinates) => {
		if (onClick) {
			onClick(cityCoordinates);
		}
	};

	const handleShowLayersMouseOn = () => {
		setShowLayers(true);
	};

	const handleShowLayersMouseOff = () => {
		setShowLayers(false);
	};
	const customIcon = L.divIcon({
		className: 'custom-icon',
		html: ReactDOMServer.renderToString(<CustomMarkerIcon />),

		iconAnchor: [19, 12], 
	});
	return (
		<>

			<div center={[0, 0]} zoom={10} style={{ height: '400px', width: '100%' }}>
				{/* <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}


				<LayersControl position="topright">
					{citiesData.map((city) => (
						<LayersControl.Overlay key={city.name} name={city.name}>
							<Marker icon={customIcon} position={city.coordinates}>
								<Popup>
									<div style={{ flexDirection: 'column' }}>
										<span
											style={{ cursor: 'pointer' }}
											onClick={() => onClick(city.coordinates)}
										>
											<h4>
												{city.fullName}
											</h4>
										</span>
										<h4>{city.year}</h4>
										<h4>{city.currentlyName}</h4>
									</div>
								</Popup>
							</Marker>
						</LayersControl.Overlay>
					))}
				</LayersControl>
        
			</div>

      
		</>
	);
};

export default AllCities;