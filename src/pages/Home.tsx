import React, {useState, useEffect} from 'react';


import { Projects } from '../components';
import { HomeData } from '../interfaces';

interface HomeProps {
    homeData: HomeData
}
const Home: React.FC<HomeProps> = ({ homeData }) => {    
    if (homeData) {
        return (
            <div className='mt-4'>
                <h1>{homeData.title}</h1>
                <p className="mb-4">{homeData.description}</p>
                <Projects projects={homeData.projects}/>
            </div>
        )
    } else {
        return(<p>An error ocurred...</p>)
    }
}


export default Home;