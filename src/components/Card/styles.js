import styled from 'styled-components';

export const CardContainer = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Rock+Salt&display=swap");

    display:flex;
    flex-direction:column;
    align-items:center;

    width:100%;
    max-width:300px;

    height:200px;

    background-color:#fff;
    color:#000;

    font-family:'Montserrat', sans-serif;

    border-radius:12px;

    .upper{
        height:175px;

        img{
            width:100%;
            height:175px;
            object-fit:cover;
        }
    }

    .below{
        display:flex;
        align-items:center;
        justify-content:center;

        width:100%;
        height:50px;

        padding:8px 0;

        background-color:#fff600;
        border:1px solid black;
        border-radius:0 0 8px 8px;
    }
`;