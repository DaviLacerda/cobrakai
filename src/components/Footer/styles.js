import styled from 'styled-components';

export const FooterSC = styled.footer`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Rock+Salt&display=swap");

    display:flex;
    flex-direction:column;
    gap:4px;

    position:fixed;
    bottom:0;
    left:0;

    width:100%;
    height:fit-content;

    margin:12px;

    text-align:center;

    font-family: "Montserrat", sans-serif;
    font-weight:100;
    font-size:.8em;

    a{
        color:#f00 !important;
        text-decoration:none;

        &:hover{
            text-decoration:underline;
        }

        &:visited{
            color:inherit;
        }
    }

    .icons{
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        gap:8px;

        @media(max-width:300px){
            flex-direction:column;
        }

        width:100%;
        
        img{
            transition:.5s;
            
            &:hover, &:active{
                cursor:pointer;
                filter:brightness(0.75);
            }  
        }
    }
`;