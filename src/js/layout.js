import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/index.css';
import Layout from './layout.js';
import characters from './views/characters'; 
import charactersDetails from './views/charactersDetails';
import planets from './views/planets';
import planetsDetails from './views/planetsDetails'; 
import vehicles from './views/vehicles';
import vehiclesDetails from './views/vehiclesDetails';
const root = createRoot(document.querySelector('#app'));

root.render(
  <Router>
    <Layout />
    <Switch>
      <Route exact path="/" component={characters} />
      <Route path="/details/characters/:id" component={charactersDetails} />
      <Route exact path="/" component={planets} />
      <Route path="/details/planets/:id" component={planetsDetails} />
      <Route exact path="/" component={vehicles} />
      <Route path="/details/vehicles/:id" component={vehiclesDetails}/>
    </Switch>
  </Router>
);




