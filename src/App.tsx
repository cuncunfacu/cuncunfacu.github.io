import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSiteData } from './app/siteDataSlice';
import { RootState } from './app/store';

import { Routes, Route } from "react-router-dom";
import { NavBar, Loading, Footer } from './components';
import {
  Home,
  About,
  ProjectDetail
} from './pages';
import './css/style.min.css';


function App() {

  const dispatch = useDispatch()
  const status = useSelector((state: RootState) => state.siteData.status)

  useEffect(
    () => {
      if (status === 'idle') {
        dispatch(fetchSiteData())
      }
    }
    , [status, dispatch]);


  if (status === 'succeeded') {
    return (
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <div className="container container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    )
  } else if (status == "loading") {
    return (<Loading />)
  } else {
    return (<span>An error occured. Please try again later</span>)
  }
  ;
}


export default App;
