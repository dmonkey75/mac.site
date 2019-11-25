import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat|Open+Sans&display=swap');

    * {
         margin: 0;
         padding: 0;
         box-sizing: border-box;
         font-family: 'Montserrat', sans-serif;
    }

    body { 
        overflow-x: hidden;
    } 
`;