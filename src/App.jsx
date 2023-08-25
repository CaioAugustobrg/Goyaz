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
      fullName: "São Sebastião do Alemão",
      year: "Provável povoamento: 1794",
      currentlyName: 'Nome atual: Palmeiras de Goiás'
    },
    {
      name: 'Almas',
      coordinates: [-11.565883, -47.164749],
      fullName: 'Arraial de São Miguel e Almas',
      year: "Provável povoamento: 1734",
      currentlyName: 'Nome atual: Almas'
    },
    {
      name: 'Amaro Leite',
      coordinates: [-14.016678, -49.17843],
      fullName: 'Amaro Leite',
      year: "Provável povoamento: 1742",
      currentlyName: 'Nome atual: Mara Rosa'
    },
    {
      name: 'Anicuns',
      coordinates: [-16.461903853, -49.961058920],
      fullName: 'Amaro Leite',
      year: "Provável povoamento: 1734",
      currentlyName: 'Nome atual: Anicuns'
    },
    {
      name: 'Anta',
      coordinates: [-16.332123, -48.944052],
      fullName: 'Anta',
      year: "Provável povoamento:  Séc. XVIII",
      currentlyName: 'Nome atual: Anápolis'
    },
    {
      name: 'Arraial do Carmo',
      coordinates: [-10.763022332, -48.110536722],
      fullName: 'Nossa Senhora do Monte do Carmo',
      year: "Provável povoamento: 1741",
      currentlyName: 'Monte do Carmo'
    },
    {
      name: 'Arraias',
      coordinates: [-12.932045, -46.937184],
      fullName: 'Arraial da Chapada dos Negros',
      year: "Provável povoamento: 1740",
      currentlyName: 'Arraias'
    },
    {
      name: 'Barra',
      coordinates: [-15.806451, -50.309156],
      fullName: 'Arraial da Barra',
      year: "Provável povoamento: 1726",
      currentlyName: 'Nome atual: Buenolândia'
    },
    {
      name: 'Barreiro',
      coordinates: [-14.804488, -46.253893],
      fullName: 'Nossa Senhora d’Abadia',
      year: "Provável povoamento:  1800",
      currentlyName: 'Nome atual: Sítio d’Abadia'
    },
    {
      name: 'Boa Vista',
      coordinates: [-6.330104, -47.41677],
      fullName: 'Boa Vista',
      year: "Provável povoamento: 1818",
      currentlyName: 'Nome atual: Tocantinópolis'
    },
    {
      name: 'Bonfim',
      coordinates: [-16.670675, -48.615367],
      fullName: 'Bonfim',
      year: "Provável povoamento: 1774",
      currentlyName: 'Silvânia'
    },
    {
      name: 'Caldas',
      coordinates: [-17.745955, -48.62866],
      fullName: 'Caldas',
      year: "Provável povoamento: 1777",
      currentlyName: 'Caldas Novas'
    },
    {
      name: 'Catalão',
      coordinates: [-18.170599546, -47.950972749],
      fullName: 'Catalão',
      year: "Provável povoamento: 1722",
      currentlyName: 'Nome atual: Catalão'
    },
    {
      name: 'Calvacante',
      coordinates: [-13.797049, -47.459165],
      fullName: 'Cavalcante',
      year: "Provável povoamento: 1736",
      currentlyName: 'Nome atual: Cavalcante'
    },
    {
      name: 'Chagas',
      coordinates: [-15.92986, -49.260776],
      fullName: 'Arraial de Chagas',
      year: "Provável povoamento: 1740",
      currentlyName: 'Nome atual: São Francisco de Goiás'
    },
    {
      name: 'Chapada da Natividade',
      coordinates: [-11.617176, -47.749699],
      fullName: 'Chapada da Natividade',
      year: "Provável povoamento: 1733",
      currentlyName: 'Nome atual: Chapada da Natividade'
    },
    {
      name: 'Chapéu',
      coordinates: [-13.259321, -46.888197],
      fullName: 'Morro do Chapéu',
      year: "Provável povoamento: 1769",
      currentlyName: 'Nome atual: Monte Alegre de Goiás'
    },
    {
      name: 'Conceição',
      coordinates: [-12.21878, -47.296931],
      fullName: 'Conceição do Norte',
      year: "Provável povoamento: 1741",
      currentlyName: 'Nome atual: Conceição do Tocantins'
    },
    {
      name: 'Corumbá',
      coordinates: [-15.925566, -48.807087],
      fullName: 'Corumbá',
      year: "Provável povoamento: 1730",
      currentlyName: 'Nome atual: Corumbá de Goiás'
    },
    {
      name: 'Crixás',
      coordinates: [-14.544517, -49.968933],
      fullName: 'Nossa Senhora da Conceição',
      year: "Provável povoamento: 1726",
      currentlyName: 'Nome atual: Crixás'
    },
    {
      name: 'Curralinho',
      coordinates: [-16.022502, -49.802483],
      fullName: 'Curralinho',
      year: "Provável povoamento: 1770",
      currentlyName: 'Nome atual: Itaberaí'
    },
    {
      name: 'Descoberto',
      coordinates: [-13.439443, -49.14457],
      fullName: 'Descoberto',
      year: "Provável povoamento: 1750-1770",
      currentlyName: 'Nome atual: Porangatu'
    },
    {
      name: 'Flores',
      coordinates: [-14.455417, -47.037758],
      fullName: 'Quilombo da Conceição',
      year: "Provável povoamento: séc. XVII",
      currentlyName: 'Nome atual: Flores de Goiás'
    },
    {
      name: 'Formosa',
      coordinates: [-15.545352, -47.337318],
      fullName: 'Arraial dos Couros',
      year: "Provável povoamento: 1767",
      currentlyName: 'Nome atual: Formosa'
    },
    {
      name: 'Forte',
      coordinates: [-14.308547959, -47.290396575],
      fullName: 'Arraial do Forte',
      year: "Provável povoamento: 1740",
      currentlyName: 'Nome atual: Forte'
    },
    {
      name: 'Goyaz',
      coordinates: [-15.93443, -50.140203],
      fullName: 'Vila Boa de Goyaz',
      year: "Provável povoamento: 1729",
      currentlyName: 'Nome atual: Goiás'
    },
    {
      name: 'Guarinos',
      coordinates: [-14.732738, -49.702004],
      fullName: 'Gorino',
      year: "Provável povoamento: 1730",
      currentlyName: 'Nome atual: Guarinos'
    },
    {
      name: 'Jaraguá',
      coordinates: [-15.758049, -49.334876],
      fullName: 'Arraial do Córrego do Jaraguá 	',
      year: "Provável povoamento: 1726",
      currentlyName: 'Nome atual: Jaraguá'
    },
    {
      name: 'Meiaponte',
      coordinates: [-15.852514, -48.958792],
      fullName: 'Meiaponte',
      year: "Provável povoamento: 1727",
      currentlyName: 'NNome atual: Pirenópolis'
    },
    {
      name: 'Moquém',
      coordinates: [-14.552548, -48.165838],
      fullName: 'Moquém',
      year: "Provável povoamento: 1736",
      currentlyName: 'Nome atual: Moquém'
    },
    {
      name: 'Mossamedes',
      coordinates: [-16.125382, -50.213121],
      fullName: 'Aldeia de São José',
      year: "Provável povoamento: 1755",
      currentlyName: 'Nome atual: Mossâmedes'
    },
    {
      name: 'Natividade',
      coordinates: [-11.707922509, -47.724519444],
      fullName: 'Arraial de São Luiz',
      year: "Provável povoamento: 1734",
      currentlyName: 'Nome atual: Natividades'
    },
    {
      name: 'Ouro Fino',
      coordinates: [-15.946413, -50.034612],
      fullName: 'Ouro Fino',
      year: "Provável povoamento: <1729",
      currentlyName: 'Ruínas em Calcilândia (Caieira), Distrito da Cidade de Goiás.'
    },
    {
      name: 'Palma',
      coordinates: [-12.614506, -47.882516],
      fullName: 'Palma',
      year: "Provável povoamento: 1740-1770",
      currentlyName: 'Nome atual: Paranã'
    },
    {
      name: 'Peixe',
      coordinates: [-12.038311, -48.540166],
      fullName: 'Arraial de Santa Cruz das Itans 	',
      year: "Provável povoamento: 1776",
      currentlyName: 'Nome atual: Peixe'
    },
    {
      name: 'Pilar',
      coordinates: [-14.761606, -49.581199],
      fullName: 'Pilar',
      year: "Provável povoamento: 1736",
      currentlyName: 'Nome atual: Pilar de Goiás'
    },
    {
      name: 'Pilões',
      coordinates: [-16.437232, -51.113811],
      fullName: 'Pilões',
      year: "Provável povoamento: 1748",
      currentlyName: 'Nome atual: Iporá'
    },
    {
      name: 'Porto Imperial',
      coordinates: [-10.707867, -48.417208],
      fullName: 'Arraial de Porto Real do Pontal',
      year: "Provável povoamento: 1738",
      currentlyName: 'Nome atual: Porto Nacional'
    },
    {
      name: 'Pouso Alto',
      coordinates: [-17.305172, -49.026586],
      fullName: 'Pouso alto',
      year: "Provável povoamento: 1737",
      currentlyName: 'Nome atual: Piracanjuba'
    },
    {
      name: 'Ruínas - Arraial do Ferreiro',
      coordinates: [-15.91261, -50.102714],
      fullName: 'Ruínas – Arraial do Ferreiro',
      year: "Provável povoamento: 1726",
      currentlyName: 'Ruínas próximas a Goiás.'
    },
    {
      name: 'Ruínas - Arraial de Pontal',
      coordinates: [-10.776024297232002, -48.56001816667665],
      fullName: 'Bom Jesus do Pontal',
      year: "Provável povoamento: séc. XVIII",
      currentlyName: 'Sítio Arqueológico próximo a Serra do Pontal;'
    },
    {
      name: 'Santa Cruz',
      coordinates: [-17.316786, -48.481988],
      fullName: 'Santa Cruz',
      year: "Provável povoamento: 1729",
      currentlyName: 'Nome atual: Santa Cruz de Goiás'
    },
    {
      name: 'Santa Luzia',
      coordinates: [-16.24846, -47.947023],
      fullName: 'Santa Luzia',
      year: "Provável povoamento: 1746",
      currentlyName: 'Nome atual: Luziânia'
    },
    {
      name: 'Santa Maria do Araguaya',
      coordinates: [-8.804925, -49.556593],
      fullName: 'Santa Maria do Araguaya',
      year: "Provável povoamento: 1812",
      currentlyName: 'Nome atual: Araguacema'
    },
    {
      name: 'Santo Antônio Do Descoberto',
      coordinates: [-15.943474, -48.25969],
      fullName: 'Santo Antônio do Descoberto',
      year: "Provável povoamento: 1722",
      currentlyName: 'Nome atual: Santo Antônio do Descoberto'
    },
    {
      name: 'São Domingos',
      coordinates: [-13.399055, -46.319332],
      fullName: 'Arraial Velho',
      year: "Provável povoamento: Séc. XVII",
      currentlyName: 'Nome atual: São Domingos'
    },
    {
      name: 'São Felix',
      coordinates: [-10.170232, -46.65896],
      fullName: 'Arraial de São Miguel e Almas',
      year: "Provável povoamento: 1736",
      currentlyName: 'Nome atual: São Felix do Tocantins'
    },
    {
      name: 'São José do Duro',
      coordinates: [-11.625376, -46.821616],
      fullName: 'São José do Duro',
      year: "Provável povoamento: 1750",
      currentlyName: 'Nome atual: Dianópolis'
    },
    {
      name: 'São José do Tocantins',
      coordinates: [-14.474668, -48.459499],
      fullName: 'São José do Tocantins',
      year: "Provável povoamento:  1735-72",
      currentlyName: 'Nome atual: Niquelândia'
    },
    {
      name: 'Taguatinga',
      coordinates: [-12.404552, -46.43713],
      fullName: 'Travessia do Brejo',
      year: "Provável povoamento: século XVIII",
      currentlyName: 'Nome atual: Taguatinga'
    },
    {
      name: 'Trahiras',
      coordinates: [-14.469815, -48.551593],
      fullName: 'Trahiras',
      year: "Provável povoamento: 1735",
      currentlyName: 'Nome atual: Tupiraçaba'
    },
    {
      name: 'Entre Rios',
      coordinates: [-17.721972, -48.158549],
      fullName: 'Arraial do Vai-vem',
      year: "Provável Povoamento: 1816",
      currentlyName: 'Nome atual: Ipameri'
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
          <LayersControl.Overlay checked name="Edificações existentes">
            <ExistentesLayer />
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Edificações prováveis">
            <ProvaveisLayer />
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Edificações extintas">
            <ExtintasLayer />
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Arruamento urbano">
            <FundosLayer />
          </LayersControl.Overlay>


          


        </LayersControl>

        {/* <MinimapControl position="bottomright" /> */}
              <AllCities citiesData={citiesData} onClick={handleCityClick} />
              <GlobalStyle />
      </MapContainer>
    </>
  );
}

export default App;