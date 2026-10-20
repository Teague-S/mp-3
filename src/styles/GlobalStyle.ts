import {createGlobalStyle} from "styled-components";

// Palette (colorhunt.co): #010736 #0D1C42 #22396F #FCF1D0
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
    }

    /* darkest color on the page canvas so the wrapper's side margins are visible */
    html {
        background-color: #010736;
    }

    body {
        font-family: "Lato", sans-serif;
        font-size: calc(14px + 0.4vw);
        color: #FCF1D0;
    }

    h1, h2, h3 {
        font-family: "Montserrat", sans-serif;
    }

    img {
        max-width: 100%;
    }
`;

export default GlobalStyle;
