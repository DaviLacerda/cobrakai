import styled from 'styled-components';

export const CardContainer = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Rock+Salt&display=swap");

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:16px;

    width:100%;
    font-family:'Montserrat', sans-serif;

    @media(max-width:600px){
        flex-direction:column;
    }

    @media(max-width:900px){
        margin-top:100px;
    }

    .cardShow{
        width:75%;

        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        align-items:center;
        justify-content:center;
        gap:16px;
    }
`;