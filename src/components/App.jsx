import '../styles/styles.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Error404 from './Pages/Error404';

function App() {
  return (
    <Router>
      <Switch className="App-header">
        <Route path="/" exact component={ Home } />
        <Route component={ Error404 } />
      </Switch>
    </Router>
  );
}

export default App;
