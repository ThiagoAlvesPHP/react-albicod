import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Menu from './components/Menu';
import Routers from './routers/Routers';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routers />
    </BrowserRouter>
  );
}

export default App;
