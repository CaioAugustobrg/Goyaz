import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

  body {
    box-sizing: border-box;
  margin: 0;
    padding: 0;
		height: 90%;
    overflow-x: hidden; 
    width: 100%;
    font-family: 'Roboto', sans-serif;
		color: #fff;
    font-size: 16px;
  //   @media (max-width: 768px) {
  //     width: 100%;
  // }
  }`;
export default GlobalStyle;