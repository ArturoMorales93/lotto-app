import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainMenu from './Organisms/MainMenu'
import Home from './Pages/Home'
import Table from './Pages/Table'
import Consulta from './Pages/Consulta'
import AcercaDe from './Pages/AcercaDe'
import Error404 from './Pages/Error404'
import Footer from './Atoms/Footer'

const AppRoutes = () => (
    <Router>
        <MainMenu />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tabla" component={Table} />
            <Route path="/consulta" component={Consulta} />
            <Route path="/acerca-de" component={AcercaDe} />
            <Route component={Error404} />
        </Switch>
        <Footer />
    </Router>
)

export default AppRoutes