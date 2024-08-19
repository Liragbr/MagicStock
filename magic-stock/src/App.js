import {BrowserRoute as Route, Switch, Route, Link} from 'react-route-dom'
import Home from './Componets/pages/pages/Home'
import Login from './Componets/pages/pages/Login'
import Singin from './Componets/pages/pages/Singin'
import Sobrenos from './Componets/pages/pages/Sobrenos'
import Stock from './Componets/pages/pages/Stock'

import Container from './Componets/pages/layouts'

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
        <Container>
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
        </Container>
      </Switch>
      
      <p>Footer</p>
    </Router>
  );
}

export default App;
