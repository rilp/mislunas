import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavMenus from './components/NavMenus';
import Home from './views/Home';

function App() {
  return (
    <Router>
      <NavMenus />
      <Switch>
        <Route path="/calendario" exact>Calendario</Route>
        <Route path="/login" exact>Login</Route>
        <Route path="/registro" exact>Resgistro</Route>
        <Route path="/" component={Home} exact />
        <Route path="*">404</Route>
      </Switch>
    </Router>
  );
}

export default App;
