
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@font-face {
  font-family: 'Recoleta';
  src: local('Recoleta'), url(./fonts/Recoleta-RegularDEMO.otf) format('truetype');
}

  html,
  body,
  #root{
    height: 100%;
    font-family: 'Recoleta';
    background: #FFF6EE;

  ::-webkit-scrollbar-track {
    background-color: #F4F4F4;
  }
  ::-webkit-scrollbar {
    width: 8px;
    background: #F4F4F4;
  }
  ::-webkit-scrollbar-thumb {
    background: #FF9A36;
    border-radius: 2px;
  }
  }

  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
  }

`