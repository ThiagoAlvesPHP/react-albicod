import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Home, About, Projects, Services, Contact} from '../pages';

function Routers() {
  return (
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/about"><About /></Route>
      <Route path="/projects"><Projects /></Route>
      <Route path="/services"><Services /></Route>
      <Route path="/contact"><Contact /></Route>
    </Switch>
  );
}

export default Routers;