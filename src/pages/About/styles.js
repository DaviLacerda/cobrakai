import styled from 'styled-components';

export const AboutContainer = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Rock+Salt&display=swap");

    width:100%;

    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-evenly;

    @media(max-width:900px){
        flex-direction:column;
        gap:16px;

        margin-top:100px;
    }

    .left{
        display:flex;
        flex-direction:column;
        gap:10px;

        width:100%;
        max-width:720px;

        padding:16px;

        font-family:'Montserrat', sans-serif;
        letter-spacing:.1em;
    }

    .right{
        margin:12px;

        img{
            width:100%;
            max-width:400px;
        }
    }
`;