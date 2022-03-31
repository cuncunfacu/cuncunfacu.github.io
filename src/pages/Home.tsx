import React, {useState, useEffect} from 'react';

import {db} from '../firebase-config';
import { collection, getDocs, query, where, documentId } from "firebase/firestore";

import { HomeData } from '../interfaces'
import { Projects } from '../components';

const Home: React.FC<any> = (props: null) => {

    const [homeData, setHomeData] = useState<HomeData | undefined>(undefined)
    
    useEffect(
        () => {
            (async () => {
                const homeData = await fetchHomeData(); //todo: try catch
                setHomeData(homeData);
            })();
        }
        , []);
    if (homeData) {
        return (
            <div>
                <h1>{homeData.title}</h1>
                <p>{homeData.description}</p>
                <h2>Github Personal projects...</h2>
                <Projects projects={homeData.projects}/>
            </div>
        )
    } else {
        return(<p>Loading...</p>)
    }
}


// ---- HELPERS ----
const fetchHomeData = async (): Promise<HomeData> => {
    const q = query(collection(db, "home"), where(documentId(), "==", "home1" ));
    const querySnapshot = await getDocs(q);
    const homeMetadata = querySnapshot.docs[0].data() as HomeData
    return (homeMetadata)
}

export default Home;