import styled from "styled-components";
import type {ReactNode} from "react";

const StyledMain = styled.main`
    width: 70%;
    min-height: 100vh;
    padding: calc(20px + 2vw);
    background-color: #FCF1D0;
    color: #010736;

    & h2 {
        font-size: calc(20px + 1vw);
        margin-bottom: calc(10px + 1vw);
    }

    & h3 {
        font-size: calc(16px + 0.6vw);
        margin-top: calc(15px + 1vw);
        margin-bottom: calc(5px + 0.3vw);
    }

    & p, & li {
        line-height: 1.5;
        margin-bottom: calc(8px + 0.5vw);
    }

    & ul {
        padding-left: calc(15px + 1vw);
    }

    & a {
        color: #22396F;
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
    }

    @media screen and (max-width: 750px) {
        padding: calc(10px + 2vw);
    }
`;

// props.children is the placeholder for whichever page is currently routed
export default function Main(props: {children: ReactNode}) {
    return (
        <StyledMain>
            {props.children}
        </StyledMain>
    );
}
