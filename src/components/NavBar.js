import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const NavBar = () => {

    const { activeLink, setActiveLink } = useState('home');
    //Para detectar si el usuario ha hecho scroll y cambiar el color de fondo del Navbar
    const { scrolled, setScrolled} = useState(false);
    //Cuando se realiza un scroll, se dispara el useEffect
    useEffect(() => {
        const onScroll = () => {
            //Si el scroll ha sido mayor a 50, que es el alto del Navbar
            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        //Agregamos el listener para detectar cuando hay un scroll
        window.addEventListener("scroll", onScroll);
        //También tengo que eliminar el listener cuando el componente es eliminado del DOM
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        //Cambio la clase en base a sí se ha hecho scroll o no
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={ activeLink === 'home' ? "active-navbar-link" : "navbar-link"} onClick={ () => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={ activeLink === 'skills' ? "active-navbar-link" : "navbar-link"} onClick={ () => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={ activeLink === 'projects' ? "active-navbar-link" : "navbar-link"} onClick={ () => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item Iten href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="#"><img src={navIcon1} alt=""></img></a>
                        <a href="#"><img src={navIcon2} alt=""></img></a>
                        <a href="#"><img src={navIcon3} alt=""></img></a>
                    </div>
                    <button className="vvd" onClick={() => console.log("connect")}><span>Let's connect</span></button>
                </span>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}