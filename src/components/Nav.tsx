import styled from "styled-components";
import {Link} from "react-router-dom";

// vertical column above 750px, full-width horizontal row below 750px
const StyledNav = styled.nav`
    width: 30%;
    padding: calc(15px + 1vw);
    background-color: #22396F;

    & ul {
        list-style: none;
        padding: 0;
    }

    & li {
        display: block;
        padding: calc(8px + 0.3vw) 0;
        border-bottom: 1px solid #FCF1D0;
    }

    & a {
        text-decoration: none;
        color: #FCF1D0;
        font-family: "Montserrat", sans-serif;
        font-size: calc(14px + 0.5vw);
    }

    @media screen and (max-width: 750px) {
        width: 100%;
        padding: calc(5px + 1vw);

        & ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        & li {
            border-bottom: none;
            padding: calc(4px + 0.3vw) calc(6px + 0.5vw);
        }
    }
`;

// Link (instead of <a href>) swaps the page inside Main without reloading index.html
export default function Nav() {
    return (
        <StyledNav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </StyledNav>
    );
}
