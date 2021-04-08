
import { createGlobalStyle } from 'styled-components'
import 'react-circular-progressbar/dist/styles.css'
export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

* {
      font-family: 'Open Sans', sans-serif;
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
  }

  html,
  body,
  #root{
    height: 100%;
    background: #FFF6EE;
    scroll-behavior: smooth;

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


`