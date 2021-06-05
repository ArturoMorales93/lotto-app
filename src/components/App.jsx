import '../styles/styles.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainMenu from './Organisms/MainMenu'
import Home from './Pages/Home'
import Table from './Pages/Table'
import Error404 from './Pages/Error404';
import Footer from './Atoms/Footer'

function App() {
  return (
    <Router>
      <MainMenu />
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/tabla" component={ Table } />
        <Route component={ Error404 } />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
