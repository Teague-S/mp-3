import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledFooter = styled.footer`
    width: 100%;
    padding: calc(10px + 1vw);
    background-color: #0D1C42;
    text-align: center;
    font-size: calc(12px + 0.3vw);

    & a {
        color: #FCF1D0;
    }
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>
                &copy; 2026 Teague Spooner. All rights reserved. <Link to="/credits">Credits</Link>
            </p>
        </StyledFooter>
    );
}
