import React from 'react';
import Header from './components/Header'
import Fiscalias from './components/Fiscalias'
import NuevaFiscalia from './components/NuevaFiscalia';
import EditarFiscalia from './components/EditarFiscalia';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store = {store}>
      <Header/>
      <div className= "content-center pl-36 pr-36">
        <Switch>
          <Route exact path="/" component= {Fiscalias}/>
          <Route exact path="/fiscalias/nuevo" component= {NuevaFiscalia}/>
          <Route exact path="/fiscalias/editar/:id" component= {EditarFiscalia}/>
        </Switch>
      </div>
      </Provider>
    </Router>
  )
}

export default App;
