import React, { useState } from 'react';
import { StyledLayersControl,StyledGiVillage,CitiesBox,Container } from './styles';

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
    <Container>

    { showLayers && ( 
      <StyledLayersControl onMouseLeave={handleShowLayersMouseOff}>
      {citiesData.map((city) => (
          <div  key={city.name} >
          <span onClick={() => handleClick(city.coordinates)}>{city.name}</span>
        </div>
      ))}
    </StyledLayersControl>
      )
    } 
    <CitiesBox onMouseEnter={handleShowLayersMouseOn} >
      <StyledGiVillage />
    </CitiesBox>
    </Container>
  );
};

export default AllCities;
