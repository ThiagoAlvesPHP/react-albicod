import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Home, About, Projects, Services, Contact} from '../pages';
import { useTranslation } from 'react-i18next';

function Routers() {
  return (
    <Switch>
      <Route exact path="/"><Home translation={useTranslation} /></Route>
      <Route path="/about"><About translation={useTranslation} /></Route>
      <Route path="/projects"><Projects translation={useTranslation} /></Route>
      <Route path="/services"><Services translation={useTranslation} /></Route>
      <Route path="/contact"><Contact translation={useTranslation} /></Route>
    </Switch>
  );
}

export default Routers;