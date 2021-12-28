import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        border-box:box-sizing;
    }

    body{
        width:100%;
        min-height:100vh;
        height:fit-content;

        display:flex;
        align-items:center;
        justify-content:center;

        background-color:#141414;
        color:#fff;
    }

    #root{
        width:100%;
        margin:12px;
    }
`;