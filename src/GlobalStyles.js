import { createGlobalStyle } from "styled-components";



export  const GlobalStyles = createGlobalStyle`


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Space Grotesk", sans-serif;
    }

    html{
        font-size: 62.5%;
    }

    body{
        min-width: 375px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media only screen and (min-width:1440px) {
            justify-content: center;
            align-items: flex-start;
            
        }

    }
`;