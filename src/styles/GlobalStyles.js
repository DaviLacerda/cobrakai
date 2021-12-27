import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        border-box:box-sizing;
        /* overflow-x:hidden; */
    }

    body{
        width:100%;
        min-height:100vh;
        height:fit-content;

        background-color:#141414;
        color:#fff;
    }
`;