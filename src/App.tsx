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

import { SiteData } from './interfaces'

import { NavBar } from './components';

enum Language {
  Spanish = "Esp",
  English = "Eng"
}

function App() {
  const [siteData, setSiteData] = useState<SiteData | undefined>(undefined)
  const [language, setLanguage] = useState<Language>(Language.English);
  const [isLoading, setIsLoading] = useState(true)

  const switchLanguage = () => {
    setIsLoading(true)
    setLanguage(Language.Spanish)
  }

  useEffect(
    () => {
      (async () => {
        const siteData = await fetchSiteData(language); //todo: try catch
        setSiteData(siteData);
        setIsLoading(false)
      })();
    }
    , [language]);

  
  if (isLoading) {
    return (<span>Loading</span>)
  } else if (siteData && siteData.homeData) {
    return (
      <div>
        <NavBar switchLanguage={switchLanguage}/>
        <div className="container container-fluid">
          <Routes>
            <Route path="/" element={<Home homeData={siteData.homeData} />} />
            <Route path="/about" element={<About />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
          </Routes>
        </div>
      </div>
    )
  } else {
    return (<span>Error</span>)
  }
  ;
}

// ---- HELPERS ----
const fetchSiteData = async (language: Language): Promise<SiteData> => {
  const q = query(collection(db, "siteData"), where(documentId(), "==", `siteData${language}`));
  const querySnapshot = await getDocs(q);
  const homeMetadata = querySnapshot.docs[0].data() as SiteData
  return (homeMetadata)
}

export default App;
