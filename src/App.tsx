import React, { useState, useEffect } from 'react';

import { db } from './firebase-config';
import { collection, getDocs, query, where, documentId } from "firebase/firestore";
import {
  Routes,
  Route,
} from "react-router-dom";

import './css/style.min.css';
import {
  Home,
  About,
  ProjectDetail
} from './pages';

import { SiteData, Language } from './interfaces'

import { NavBar, Loading } from './components';


function App() {
  const [siteData, setSiteData] = useState<SiteData | undefined>(undefined)
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(Language.English);
  const [isLoading, setIsLoading] = useState(true)

  const switchLanguage = (newLanguage: Language) => {
    setIsLoading(true)
    setSelectedLanguage(newLanguage)
  }

  useEffect(
    () => {
      (async () => {
        const siteData = await fetchSiteData(selectedLanguage); //todo: try catch
        setSiteData(siteData);
        setIsLoading(false)
      })();
    }
    , [selectedLanguage]);

  
if (siteData) {
    return (
      <div>
        <NavBar selectedLanguage={selectedLanguage} switchLanguage={switchLanguage} />
        {isLoading ? <Loading /> :
          <div className="container container-fluid">
            <Routes>
              <Route path="/" element={<Home homeData={siteData.homeData} />} />
              <Route path="/about" element={<About aboutMeData={siteData.aboutMeData} />} />
              <Route path="/project/:projectId" element={<ProjectDetail selectedLanguage={selectedLanguage} />} />
            </Routes>
          </div>
        }
      </div>
    )
  } else if (isLoading) {
    return(<Loading/>)
  } else {
    return (<span>Error</span>)
  }
  ;
}

// ---- HELPERS ----
const fetchSiteData = async (selectedLanguage: Language): Promise<SiteData> => {
  const q = query(collection(db, "siteData"), where(documentId(), "==", `siteData${selectedLanguage}`));
  const querySnapshot = await getDocs(q);
  const homeMetadata = querySnapshot.docs[0].data() as SiteData
  return (homeMetadata)
}

export default App;
