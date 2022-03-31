import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

interface NavBarProps {
    switchLanguage: Function
}
const NavBar: React.FC<NavBarProps> = ( { switchLanguage }) => {
    return (
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
            <Container>
                <NavLink className='navbar-brand' to={'/'}>My Portfolio</NavLink>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        <NavLink to={'/'} className='nav-link'>Home</NavLink>
                        <NavLink to={'/about'} className='nav-link'>About Me</NavLink>
                    </Nav>
                    <Nav>
                        <Button variant="outline-secondary" onClick={() => switchLanguage()}>Switch to 🇪🇸</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;