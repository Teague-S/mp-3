import {Route, Routes} from "react-router-dom";
import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Main from "./Main.tsx";
import Footer from "./Footer.tsx";
import Home from "../pages/Home.tsx";
import Education from "../pages/Education.tsx";
import Experience from "../pages/Experience.tsx";
import Projects from "../pages/Projects.tsx";
import Skills from "../pages/Skills.tsx";
import About from "../pages/About.tsx";
import Contact from "../pages/Contact.tsx";
import Credits from "../pages/Credits.tsx";

// Header, Nav, and Footer are written once and stay on screen.
// Only the page inside Main changes when the path changes.
export default function Root() {
    return (
        <>
            <Header/>
            <Nav/>
            <Main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/education" element={<Education/>}/>
                    <Route path="/experience" element={<Experience/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/skills" element={<Skills/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/credits" element={<Credits/>}/>
                </Routes>
            </Main>
            <Footer/>
        </>
    );
}
