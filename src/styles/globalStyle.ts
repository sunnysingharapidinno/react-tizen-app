import { createGlobalStyle } from "styled-components"
import { fontSizes } from "./fonts"

export const GlobalStyle = createGlobalStyle`
  #root, #main-app{  
    transition: margin 300ms ease-in-out;        
    background: ${(props) => props.theme?.primary};;
    overflow-y:scroll !important;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    min-height: 100vh;
    height: 100%;
  }

  
  h1,h2,h3,h4{
    margin: 0;
  }
  h1 {
    font-size: ${fontSizes.mediaXXL};
  }
  h2 {
    font-size: ${fontSizes.mediaXL};
  }
  h3 {
    font-size: ${fontSizes.mediaL};
  }
  h4 {
    font-size: ${fontSizes.mediaM};
  }
  html {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(props) => props.theme.primary};
  }
  html,
  body {
    font-size: 16px;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
  body {
    min-height: 100%;
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.primary};
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-transition: 'color 9999s ease-out, background-color 9999s ease-out';
    -webkit-transition-delay: 9999s;
  }
  *::-webkit-scrollbar {
    width: 12px;
    height: 8px;
    
    border-radius: 4px;
    scrollbar-width: thin;
  }
  *::-webkit-scrollbar-thumb {
    border: 2px solid transparent;
    
    border-radius: 20px;
    background-clip: content-box;
  }
  #root{
    display: flex;
    flex-flow: column;
    min-height: 100vh;
    max-width: 100%;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  a {
    text-decoration: none;
    
  }
  label {
    font-size: ${fontSizes.mediaXS};
    position: relative;    
  }
  
  
  
 
  
  
  
 

  
  
  

  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    &::before, &::after {
      box-sizing: border-box;
    }
  }

  

  
`
