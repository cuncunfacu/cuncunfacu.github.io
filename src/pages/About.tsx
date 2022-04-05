import React, {useState, useEffect} from 'react';
import aboutSvg from '../assets/images/user-2935373.svg';
import { AboutMeData } from '../interfaces'
interface AboutProps {
    aboutMeData: AboutMeData
}
const About: React.FC<AboutProps> = ({ aboutMeData }) => {
    return (
        <div className='container container-fluid mt-4'>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-md-3'>
                    <h1>{aboutMeData.title}</h1>
                    <p className="text-justify">{aboutMeData.bio}</p>
                </div>
                <div className='col-md-3'>
                    <img src={aboutSvg} alt="about me image" style={{ height: "20rem" }} />
                </div>
            </div>
        </div>
    )
}

export default About;