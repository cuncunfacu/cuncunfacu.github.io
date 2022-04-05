import React, {useState, useEffect} from 'react';

import codeImg from '../assets/images/codeImg.svg'
import downAngle from '../assets/images/down-angle.svg'
import { Projects } from '../components';
import { HomeData } from '../interfaces';

interface HomeProps {
    homeData: HomeData
}
const Home: React.FC<HomeProps> = ({ homeData }) => {
    if (homeData) {
        return (
            <div className='container container-fluid mt-4'>
                <div className='col'>
                    <div className='row align-items-lg-center p-4 mb-4'>
                        <div className='col-md-8 order-md-1 col-lg-7 text-center text-md-start'>
                            <h1>{homeData.title}</h1>
                            <p className="mb-4">{homeData.description}</p>
                        </div>
                        <div className="col-8 mx-auto col-md-4 order-md-2 col-lg-5">
                            <img src={codeImg} alt="presentation image" />
                        </div>
                    </div>
                    <div className='row mt-4 d-flex align-items-center'>
                        <h2 className="text-center">Projects</h2>
                        <img src={downAngle} alt="down" style={{ height: "3rem"}}/>
                        <Projects projects={homeData.projects} />
                    </div>
                </div>
            </div>
        )
    } else {
        return (<p>An error ocurred...</p>)
    }
}

export default Home;