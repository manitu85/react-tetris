import { createGlobalStyle } from 'styled-components';
import font from 'assets/fonts/Pixel-LCD-7.woff'

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Pixel';
    src: url(${font}) format('woff');
    /* src: url('assets/fonts/Pixel-LCD-7.woff') format('woff'); */
  }

  body {
    margin: 0;
    background: orange;
    font-family: Pixel;
  }

`

export default GlobalStyles