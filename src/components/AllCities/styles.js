import styled from 'styled-components';
import { GiVillage } from 'react-icons/gi';

export const Container = styled.div`
position: absolute;
height: 400px;
width: 200px;
right: 0;
z-index: 4999;
`;
export const StyledLayersControl = styled.div`

  position: absolute;
  margin-left: auto;
  background-clip: padding-box;
  z-index: 1001;
  top: 40px;
  width: auto;
  background-color: #fff;
  border-radius: 5px;
  font-size: 0.75rem;
  line-height: 1.5;
  height: inherit;
  width: 180px;
  overflow-y: auto;
  color: #ccc;
  font-size: 13px;
  line-height: 19.5px;
  overflow-x: hidden;
  border: 2px solid rgba(0, 0, 0, 0.2);
    div {
 span {
  &:hover {
        color: black;
        cursor: pointer;
      }
 }
    }
  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    max-height: calc(100vh - 51px);
    overflow-y: auto;
  }

`;

export const CitiesBox = styled.div`
top: 0;
right: 0 ;
  position: absolute;
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

