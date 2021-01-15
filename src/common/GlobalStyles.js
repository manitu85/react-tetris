import { createGlobalStyle } from 'styled-components';
import font from 'assets/fonts/Pixel-LCD-7.woff'

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Pixel';
    src: url(${font}) format('woff');
  }

  body {
    margin: 0;
    font-family: Pixel;
  }

`

export default GlobalStyles