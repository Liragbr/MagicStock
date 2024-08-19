import {BrowserRoute as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './Componets/pages/Home'
import Login from './Componets/pages/Login'
import Singin from './Componets/pages/Singin'
import Sobrenos from './Componets/pages/Sobrenos'
import Stock from './Componets/pages/Stock'

import Container from './Componets/pages/layouts'

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/">Login</Link>
        <Link to="/">Singin</Link>
        <Link to="/">Sobrenos</Link>
        <Link to="/">Stock</Link>
      </div>
      <Switch>
        <Container>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/singin">
            <Singin />
          </Route>
          <Route exact path="/stock">
            <Stock />
          </Route>
          <Route exact path="/sobrenos">
            <Sobrenos />
          </Route>
        </Container>
      </Switch>
      
      <p>Footer</p>
    </Router>
  );
}

export default App;
