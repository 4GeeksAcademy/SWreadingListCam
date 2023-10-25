import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/index.css';
import Layout from './layout.js';
import Characters from './views/characters'; 
import CharactersDetails from './views/charactersDetails'; 
import Planets from './views/planets';
import PlanetsDetails from './views/planetsDetails'; 
import Vehicles from './views/vehicles';
import VehiclesDetails from './views/vehiclesDetails';


const root = createRoot(document.querySelector('#app'));

root.render(
  <Router>
    <Layout />
    <Switch>
      <Route exact path="/" component={Characters} />
      <Route exact path="/" component={Planets} />
      <Route exact path="/" component={Vehicles} />
      <Route path="/details/characters/:id" component={CharactersDetails} />
      <Route path="/details/planets/:id" component={PlanetsDetails} />
      <Route path="/details/vehicles/:id" component={VehiclesDetails} />
    </Switch>
  </Router>
);
