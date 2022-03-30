import React from 'react';
import logo from './logo.svg';
import {
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import {
  Proyects,
  Proyect
} from './components';

function App() {
  return (
    <>
      <h1>Facundo B.</h1>
      <p>
        Industrial engineer, musician foo bar
      </p>
      <Routes>
        <Route path="/" element={<Proyects />} />
        <Route path="/p1" element={<Proyect />} />
      </Routes>
    </>
  );
}

export default App;
