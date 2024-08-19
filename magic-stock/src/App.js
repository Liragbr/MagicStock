import {BrowserRoute as Route, Switch, Route, Link} from 'react-route-dom'
import Home from './componets/pages/Home'
import Login from './componets/pages/Login'
import Singin from './componets/pages/Singin'
import Sobrenos from './componets/pages/Sobrenos'
import Stock from './Componets/pages/Stock'


function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/">Login</Link>
      <Link to="/">Singin</Link>
      <Link to="/">Stock</Link>
      <Link to="/">sobrenos</Link>
      <ul>
        <li>Home</li>
        <li>Contato</li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/singin">
          <Sing-in />
        </Route>
        <Route exact path="/stock">
          <Stock />
        </Route>
        <Route exact path="/sobrenos">
          <Sobre Nos />
        </Route>
      </Switch>
      <p>Footer</p>
    </Router>
  );
}

export default App;
