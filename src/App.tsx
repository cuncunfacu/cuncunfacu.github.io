import React, { useState, useEffect, useRef } from 'react';
import { db } from './firebase-config';
import { collection, getDocs, query, where, documentId } from "firebase/firestore";
import { Routes, Route} from "react-router-dom";
import { SiteData, Language } from './interfaces'
import { NavBar, Loading, Footer } from './components';
import {
  Home,
  About,
  ProjectDetail
} from './pages';
import './css/style.min.css';


function App() {
  const [siteData, setSiteData] = useState<SiteData | undefined>(undefined)
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(Language.English);
  const [isLoading, setIsLoading] = useState(true)
  const [ error, setError ] = useState(false)

  const switchLanguage = (newLanguage: Language) => {
    setIsLoading(true)
    setSelectedLanguage(newLanguage)
  }

  useEffect(
    () => {
      (async () => {
        try {
          const siteData = await fetchSiteData(selectedLanguage); //todo: try catch
          setSiteData(siteData);
          setIsLoading(false)
        } catch {
          setError(true)
        }
      })();
    }
    , [selectedLanguage]);


  if (siteData) {
    return (
      <div className="d-flex flex-column min-vh-100">
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
        <Footer selectedLanguage={selectedLanguage}/>
      </div>
    )
  } else if (isLoading) {
    return (<Loading />)
  } else if (error) {
    return (<span>An error occured. Please try again later</span>)
  } else {
    return (<span>An error occured. Please try again later</span>)
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
