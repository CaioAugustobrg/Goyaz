import React, { useState } from 'react';
import { StyledLayersControl,StyledGiVillage,CitiesBox } from './styles';

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
  console.log(citiesData)
  return (
    <>
    { showLayers && ( 
        <StyledLayersControl onMouseLeave={handleShowLayersMouseOff}>
      {citiesData.map((city) => (
          <div className='SC-bcPKhP.ealKES' key={city.name} >
          <span style={{color: 'red'}} onClick={() => handleClick(city.coordinates)}>{city.name}</span>
        </div>
      ))}
    </StyledLayersControl>
      )
    } 
    <CitiesBox onMouseEnter={handleShowLayersMouseOn} >
      <StyledGiVillage />
    </CitiesBox>
    </>
  );
};

export default AllCities;
