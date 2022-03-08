import { createGlobalStyle } from 'styled-components'
import pallet from "../../config.json"

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
/*list reset*/
li {
  list-style-type: none;
  color: #F3FBFB;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  background-color: #13131f;
  min-height: 100vh;
  padding: 2.6rem 2rem 0;
}

::-webkit-scrollbar {
  width: 0.8rem;
} 

::-webkit-scrollbar-thumb {   
background-color: ${pallet.colors.primary['purple-light']}   
}

:root {
  color: #F3FBFB;
  font-family: 'Lexend Deca', sans-serif; 
}

button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  cursor: pointer;
  background: transparent;
  font-weight: 400;
  /* inherit font & color from ancestor */
  color: inherit;
  font: inherit;
  line-height: normal;
}

.container-default-size {
  max-width: 112rem;
}

a {
  text-decoration: none;
  color: ${pallet.colors.neutrals.white};
  cursor: pointer;
}
`