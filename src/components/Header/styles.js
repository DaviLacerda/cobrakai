import styled, { keyframes } from "styled-components";

const allPage = keyframes`
    from{
        height:0px;
    }
    to{
        height:20vh;
    }
`;

export const HeaderContainer = styled.header`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Rock+Salt&display=swap");

    position:fixed;
    top:0;
    left:0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    width: 100%;

    border-radius: 0 0 20px 20px;

    background-color: #ff2100;
    color: #fff600;

    @media(max-width:300px){
        flex-direction:column;
    }

    h1 {
        font-family: "Rock Salt", cursive;
        width: fit-content;
        text-align: center;
        word-wrap: break-word;
    }

    nav.menu {
        @media (max-width: 600px) {
            display: none;
        }
    }

    nav.menu__toggle {
        display: none;
        align-items: center;
        justify-content: center;

        animation: ${allPage} 0.5s forwards;

        ul {
            flex-direction: column;
        }

        @media (min-width: 600px) {
            display: none;
        }
    }

    nav {
        ul {
            display: flex;
            flex-direction: row;
            gap: 20px;

            a {
                text-decoration: none;
                color: inherit;

                &:visited {
                    color: inherit;
                }
            }

            li {
                list-style: none;

                font-family: "Montserrat", sans-serif;
                transition: filter 0.3s;

                &:hover {
                    cursor: pointer;
                    filter: brightness(0.9);
                }
            }
        }
    }
`;
