import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
  }
  body {
    font-family: Open Sans Condensed;
    padding: 20px 60px;
  } 
`
