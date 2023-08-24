import React, { useState } from 'react';
import { Box,StyledGiVillage,CitiesBox } from './styles';

const AllCities = ({ citiesData, onClick }) => {
    const [showLayers, setShowLayers] = useState(false)
  const handleClick = (cityCoordinates) => {
    if (onClick) {
      onClick(cityCoordinates);
    }
  };

  const handleShowLayersMouseOn = () => {
    setShowLayers(!showLayers)
  }
  const handleShowLayersMouseOff = () => {
    setShowLayers(!showLayers)
  }
  return (
    <>
    { showLayers && ( 
        <Box onMouseLeave={handleShowLayersMouseOff}>
      {citiesData.map((city) => (
          <div className='SC-bcPKhP.ealKES' key={city.name} >
          <span style={{color: red}} onClick={() => handleClick(city.coordinates)}>{city.name}</span>
        </div>
      ))}
    </Box>
      )
    } 
    <CitiesBox onMouseEnter={handleShowLayersMouseOn} >
   <StyledGiVillage />
  </CitiesBox>
    </>
  );
};

export default AllCities;
