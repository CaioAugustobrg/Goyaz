import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import ExistentesLayer from './components/ExistentesLayer';
import ProvaveisLayer from './components/ProvaveisLayer';
import ExtintasLayer from './components/ExtintasLayer';
import FundosLayer from './components/FundosLayer';
import AllCities from './components/AllCities';
import MinimapControl from './components/MinimapControl';
import GlobalStyle from './styles/styles.globalStyle';

function App() {

  const citiesData = [
    {
      name: 'Alemão',
      coordinates: [-16.80981, -49.921993],
    },
    {
      name: 'Almas',
      coordinates: [-11.565883, -47.164749],
    },
    {
      name: 'Amaro Leite',
      coordinates: [-14.016678, -49.17843],
    },
    {
      name: 'Anicuns',
      coordinates: [-16.461903853, -49.961058920],
    },
    {
      name: 'Anta',
      coordinates: [-16.332123, -48.944052],
    },
    {
      name: 'Arraial do Carmo',
      coordinates: [-10.763022332, -48.110536722],
    },
    {
      name: 'Arraias',
      coordinates: [-12.932045, -46.937184],
    },
    {
      name: 'Barra',
      coordinates: [-15.806451, -50.309156],
    },
    {
      name: 'Barreiro',
      coordinates: [-14.804488, -46.253893],
    },
    {
      name: 'Boa Vista',
      coordinates: [-6.330104, -47.41677],
    },
    {
      name: 'Bonfim',
      coordinates: [-16.670675, -48.615367],
    },
    {
      name: 'Caldas',
      coordinates: [-17.745955, -48.62866],
    },
    {
      name: 'Catalão',
      coordinates: [-18.170599546, -47.950972749],
    },
    {
      name: 'Calvacante',
      coordinates: [-13.797049, -47.459165],
    },
    {
      name: 'Chagas',
      coordinates: [-15.92986, -49.260776],
    },
    {
      name: 'Chapada da Natividade',
      coordinates: [-11.617176, -47.749699],
    },
    {
      name: 'Chapéu',
      coordinates: [-13.259321, -46.888197],
    },
    {
      name: 'Conceição',
      coordinates: [-12.21878, -47.296931],
    },
    {
      name: 'Corumbá',
      coordinates: [-15.925566, -48.807087],
    },
    {
      name: 'Crixás',
      coordinates: [-14.544517, -49.968933],
    },
    {
      name: 'Curralinho',
      coordinates: [-16.022502, -49.802483],
    },
    {
      name: 'Descoberto',
      coordinates: [-13.439443, -49.14457],
    },
    {
      name: 'Flores',
      coordinates: [-14.455417, -47.037758],
    },
    {
      name: 'Formosa',
      coordinates: [-15.545352, -47.337318],
    },
    {
      name: 'Forte',
      coordinates: [-14.308547959, -47.290396575],
    },
    {
      name: 'Goyaz',
      coordinates: [-15.93443, -50.140203],
    },
    {
      name: 'Guarinos',
      coordinates: [-14.732738, -49.702004],
    },
    {
      name: 'Jaraguá',
      coordinates: [-15.758049, -49.334876],
    },
    {
      name: 'Meiaponte',
      coordinates: [-15.852514, -48.958792],
    },
    {
      name: 'Moquém',
      coordinates: [-14.552548, -48.165838],
    },
    {
      name: 'Mosamedes',
      coordinates: [-16.125382, -50.213121],
    },
    {
      name: 'Natividade',
      coordinates: [-11.707922509, -47.724519444],
    },
    {
      name: 'Ouro Fino',
      coordinates: [-15.946413, -50.034612],
    },
    {
      name: 'Palma',
      coordinates: [-12.614506, -47.882516],
    },
    {
      name: 'Peixe',
      coordinates: [-12.038311, -48.540166],
    },
    {
      name: 'Pilar',
      coordinates: [-14.761606, -49.581199],
    },
    {
      name: 'Pilões',
      coordinates: [-16.437232, -51.113811],
    },
    {
      name: 'Porto Imperial',
      coordinates: [-10.707867, -48.417208],
    },
    {
      name: 'Pouso Alto',
      coordinates: [-17.305172, -49.026586],
    },
    {
      name: 'Ruínas - Arraial do Ferreiro',
      coordinates: [-15.91261, -50.102714],
    },
    {
      name: 'Ruínas - Arraial de Pontal',
      coordinates: [-10.776024297232002, -48.56001816667665],
    },
    {
      name: 'Santa Cruz',
      coordinates: [-17.316786, -48.481988],
    },
    {
      name: 'Santa Luzia',
      coordinates: [-16.24846, -47.947023],
    },
    {
      name: 'Santa Maria do Araguaya',
      coordinates: [-8.804925, -49.556593],
    },
    {
      name: 'Santo Antônio Do Descoberto',
      coordinates: [-15.943474, -48.25969],
    },
    {
      name: 'São Domingos',
      coordinates: [-13.399055, -46.319332],
    },
    {
      name: 'São Felix',
      coordinates: [-10.170232, -46.658926],
    },
    {
      name: 'São José do Duro',
      coordinates: [-11.625376, -46.821616],
    },
    {
      name: 'São José do Tocantins',
      coordinates: [-14.474668, -48.459499],
    },
    {
      name: 'Taguatinga',
      coordinates: [-12.404552, -46.43713],
    },
    {
      name: 'Trahiras',
      coordinates: [-14.469815, -48.551593],
    },
    {
      name: 'Entre Rios',
      coordinates: [-17.721972, -48.158549],
    },



  ];
  const mapRef = useRef(null);
  const [mapCenter, setMapCenter] = useState([-15.8270, -49.8362]);
  const [mapKey, setMapKey] = useState(Date.now());

  const handleCityClick = (cityCoordinates) => {
    setMapCenter(cityCoordinates);
    map.flyTo(cityCoordinates, 14);
    setMapKey(Date.now());
  };
  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;
      map.flyTo(mapCenter, map.getZoom());
    }
  }, [mapCenter]);
  return (
    <>
      <MapContainer key={mapKey} ref={mapRef} center={mapCenter} zoom={14} style={{ overflow: 'hidden', width: '100%', height: '100vh' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayersControl position="bottomleft">
          <LayersControl.Overlay checked name="Existentes geojson">
            <ExistentesLayer />
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Provaveis geojson">
            <ProvaveisLayer />
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Extintas geojson">
            <ExtintasLayer />
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Fundos geojson">
            <FundosLayer />
          </LayersControl.Overlay>


          


        </LayersControl>

        <MinimapControl position="bottomright" />
              <AllCities citiesData={citiesData} onClick={handleCityClick} />
              <GlobalStyle />
      </MapContainer>
    </>
  );
}

export default App;