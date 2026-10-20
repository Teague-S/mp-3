import styled from "styled-components";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle.ts";
import Root from "./components/Root.tsx";

// The wrapper from MP-1 (body was the wrapper there): squeezed with side margins,
// centered, and a flex container that wraps so header and footer get their own rows
// while nav and main share a row on wide screens.
const StyledApp = styled.div`
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
`;

// Every path goes to Root, and Root's <Routes> decides which page goes inside Main.
const router = createBrowserRouter(
    [{path: "*", Component: Root}]
);

export default function App() {
    return (
        <>
            <GlobalStyle/>
            <StyledApp>
                <RouterProvider router={router}/>
            </StyledApp>
        </>
    );
}
