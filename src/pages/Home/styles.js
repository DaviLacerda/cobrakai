import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

    width:100%;

    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-evenly;
    

    @media(max-width:600px){
        flex-direction:column;
        gap:16px;
    }

    .main__content{
        h2{
            width:100%;

            font-family: 'Open Sans', sans-serif;
            font-size:1.5em;

            text-transform:uppercase;
            text-align:center;

            word-wrap:break-word;
            letter-spacing:.5em;

            color: #ff2100;

            @media(max-width:300px){
                font-size:.7em;
            }

            @media(min-width:300px) and (max-width:900px){
                font-size:1em;
            }
        }
    }

    .main__image{
        display: flex;
        align-items:center;
        justify-content:center;

        width: 40vw;
        height: 40vw;
        max-width: 250px;
        max-height: 250px;

        border-radius: 50%;

        background-color: #fff600;
        clip-path:circle(126px at center);

        img{
            width:200%;
            transform:scaleX(-1);
        }
    }
`;