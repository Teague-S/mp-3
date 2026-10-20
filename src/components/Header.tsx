import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    padding: calc(20px + 2vw) calc(15px + 2vw);
    background-color: #0D1C42;
    text-align: left;

    & h1 {
        font-size: calc(24px + 1.5vw);
    }

    & p {
        font-size: calc(14px + 0.5vw);
    }

    @media screen and (max-width: 750px) {
        text-align: center;
        padding: calc(10px + 2vw) calc(5px + 2vw);
    }
`;

export default function Header() {
    return (
        <StyledHeader>
            <h1>Teague Spooner</h1>
            <p>My online resume</p>
        </StyledHeader>
    );
}
