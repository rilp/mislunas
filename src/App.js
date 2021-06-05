import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavMenus from './components/NavMenus';
import Home from './views/Home';
import Login from './views/Login';
import Calendar from './views/CalendarMain';

function App() {
  return (
    <Router>
      <NavMenus />
      <Switch>
        <Route path="/calendario" component={Calendar} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/registro" exact>Resgistro</Route>
        <Route path="/" component={Home} exact />
        <Route path="*">404</Route>
      </Switch>
    </Router>
  );
}

export default App;
