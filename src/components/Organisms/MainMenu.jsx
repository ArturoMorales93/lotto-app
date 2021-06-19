import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import useMediaQuery from '../CustomHooks/useMediaQuery'
import Icon from '../Atoms/Icon'
import IconHome from '../Atoms/IconHome'
import IconTable from '../Atoms/IconTable'
import IconConsult from '../Atoms/IconConsult'
import IconAbout from '../Atoms/IconAbout'
import BallsCounter from '../Atoms/BallsCounter'

const MainMenu = () => (
    <Navbar bg="dark" variant="dark" className="main-menu">
        {
            useMediaQuery("up", <NavLink exact to="/"><Icon /></NavLink>)
        }
        <Nav className="mr-auto">
            <NavLink className="menu-item" exact to="/">
                {useMediaQuery("down", <IconHome />)}
                Home
            </NavLink>
            <NavLink className="menu-item" to="/tabla">
                {useMediaQuery("down", <IconTable />)}
                Tabla
            </NavLink>
            <NavLink className="menu-item" to="/consulta">
                {useMediaQuery("down", <IconConsult />)}
                Consulta
            </NavLink>
            <NavLink className="menu-item" to="/acerca-de">
                {useMediaQuery("down", <IconAbout />)}
                Acerca de
            </NavLink>
            <BallsCounter />
        </Nav>
    </Navbar>
)

export default MainMenu