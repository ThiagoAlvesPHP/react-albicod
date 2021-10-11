import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Menu from './components/Menu';
import Routers from './routers/Routers';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Menu translation={useTranslation} />
      <Routers />
    </BrowserRouter>
  );
}

export default App;
