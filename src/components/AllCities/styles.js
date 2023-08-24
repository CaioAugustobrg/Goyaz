import styled from 'styled-components';
import { GiVillage } from 'react-icons/gi';
import {LayersControl} from 'react-leaflet'
export const StyledLayersControl = styled(LayersControl)`
  position: absolute;
  top: 8%;
  left: 90%;
  border: 2px solid rgba(0, 0, 0, 0.2);
  background-clip: padding-box;
  z-index: 1001;
  background-color: #fff;
  margin-right: 10px;
  margin-top: 10px;
  width: auto;
  border-radius: 5px;
  font-size: 0.75rem;
  line-height: 1.5;
  height: 300px;
  width: 180px;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    max-height: calc(100vh - 51px);
    overflow-y: auto;
  }

  SC-bcPKhP.ealKES {
    width: inherit;
    padding: 5px;
    height: auto;

    span {
      color: red;
      cursor: pointer;
      display: flex;

      &:hover {
        color: black;
      }
    }
  }
`;

export const CitiesBox = styled.div`
  position: absolute;
  top: 6%;
  left: 97%;
  border: 2px solid rgba(0, 0, 0, 0.2);
  background-clip: padding-box;
  z-index: 1000;
  background-color: #fff;
  margin-right: 10px;
  overflow: auto;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 0.75rem;
  cursor: pointer;
  width: 45px;
  height: 40px;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const StyledGiVillage = styled(GiVillage)`
  color: rgba(0, 0, 0, 0.2);
  width: 35px;
  margin: auto;
  display: flex;
  justify-content: center;
  height: inherit;
`;

