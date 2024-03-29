import './css/index.css';

import React from 'react';
import Main from "./components/main";
import Header from "./components/header";

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Main/>
    </BrowserRouter>
  );
}

export default App;
