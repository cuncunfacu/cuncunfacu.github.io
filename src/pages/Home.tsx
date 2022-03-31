import React, {useState, useEffect} from 'react';


import { Projects } from '../components';
import { HomeData } from '../interfaces';

interface HomeProps {
    homeData: HomeData
}
const Home: React.FC<HomeProps> = ({ homeData }) => {    
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
        return(<p>An error ocurred...</p>)
    }
}


export default Home;