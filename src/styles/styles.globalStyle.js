import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

  body {
    box-sizing: border-box;
  margin: 0;
    padding: 0;
		height: 90%;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden; 
    color: #333;
    width: 100%;
		color: #fff;
    font-size: 16px;
  //   @media (max-width: 768px) {
  //     width: 100%;
  // }
  }`;
export default GlobalStyle; 