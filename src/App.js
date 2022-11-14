import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import User from './components/user';

function App() {
  return (
    <Router>
      <div className="container">
        <div className='btn-group'>
          <Link to="/" className='btn btn-dark'>
            Inicio
          </Link>
          <Link to="/contacto" className='btn btn-dark'>
            Contacto
          </Link>
          <Link to="/nosotros" className='btn btn-dark'>
            Nosotros
          </Link>
        </div>
        <hr/>
        
        <Switch>
          <Route path="/nosotros/:id">
            <User/>
          </Route>
          <Route path="/contacto">
            <Contacto/>
          </Route>
          <Route path='/nosotros'>
            <Nosotros/>
          </Route>   
          <Route path='/'>
            <Inicio/>
          </Route> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
