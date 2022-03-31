import React from 'react';
import logo from './logo.svg';
import {
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import {
  Home,
  ProjectDetail
} from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/project/:projectId" element={<ProjectDetail/>} />
      </Routes>
    </>
  );
}

export default App;
