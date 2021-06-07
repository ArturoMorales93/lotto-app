import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Icon from '../Atoms/Icon'

const MainMenu = () => (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top" className="main-menu">
        <NavLink to="/"><Icon /></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/tabla">Tabla</NavLink>
                <NavLink to="/consultar">Consultar</NavLink>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default MainMenu