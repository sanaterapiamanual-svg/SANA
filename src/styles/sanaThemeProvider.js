import Abel from '../assets/fonts/Abel-Regular.ttf';
import Alatsi from '../assets/fonts/Alatsi-Regular.ttf';
import Belleza from '../assets/fonts/Belleza-Regular.ttf';
import BellotaLight from '../assets/fonts/BellotaText-Light.ttf';
import BellotaRegular from '../assets/fonts/BellotaText-Regular.ttf';
import BebasNeue from '../assets/fonts/BebasNeue-Regular.ttf';
import Akshar from '../assets/fonts/Akshar-VariableFont_wght.ttf';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';

// global
const GlobalStyle = createGlobalStyle `
  @font-face {
    font-family: 'Abel';
    src: url(${Abel}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Alatsi';
    src: url(${Alatsi}) format('truetype');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Belleza';
    src: url(${Belleza}) format('truetype');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Bellota Text';
    src: url(${BellotaLight}) format('truetype');
    font-style: normal;
    font-weight: 300;
  }

  @font-face {
    font-family: 'Bellota Text';
    src: url(${BellotaRegular}) format('truetype');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Bebas Neue';
    src: url(${BebasNeue}) format('truetype');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Akshar';
    src: url(${Akshar}) format('truetype');
    font-style: normal;
    font-weight: 400 700;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: #FFF0E3 #4F2C10;
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }
  
  html {
    margin: 0; padding: 0; width: 100%;
    height: 100%;
    overflow-x: hidden !important;
  }

  body {
    overflow-x: hidden;
    scroll-behavior: smooth;
    font-family: 'Alatsi', sans-serif;
    min-height: 100vh;
  }
`;

// theme
const theme = {
  colors: {
    light: {
      beige0: '#FFF0E3',
      beige1: '#F2E1D3',
      beige2: '#FFE3CC',
      beige3: '#FFD3AC',
      beige4: '#F5CBA5',
      beige5: '#FFC799',
      beigeBox: '#FFE0C7',
    },
    dark: {
      brown0: '#823A00',
      brown1: '#7A390A',
      brown2: '#773505',
      brown3: '#692F00',
      brown4: '#642C00',
      brown5: '#4F2C10',
    },
  },
  fonts: {
    main: "'Alatsi', sans-serif",
    description: "'Abel', sans-serif",
    secondary: "'Belleza', sans-serif",
    tertiary: "'Bellota Text', sans-serif",
    atendimento: "'Bebas Neue', sans-serif",
    variable: "'Akshar', sans-serif",
  },
};

export function SANAThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

SANAThemeProvider.propTypes = {
  children: PropTypes.node,
};
