import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { onLanguageUpdate } from '../app/siteDataSlice';
import { RootState } from '../app/store';
import { Language } from '../interfaces';


const NavBar: React.FC = () => {

    const selectedLanguage = useSelector((state: RootState) => state.siteData.selectedLanguage)
    const dispatch = useDispatch()

    const handleLanguageChange = () => {
        let newLanguage: Language
        if ( selectedLanguage == Language.English ) {
            newLanguage = Language.Spanish
        } else {
            newLanguage = Language.English
        }
        dispatch(onLanguageUpdate({ newLanguage: newLanguage }))
    }
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
                        <Button variant="outline-secondary" onClick={handleLanguageChange}>
                            {selectedLanguage == Language.English ? "Cambiar a Español" : "Switch to english"}
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;