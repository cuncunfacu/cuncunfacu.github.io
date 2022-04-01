import React, {useState, useEffect} from 'react';
import { AboutMeData } from '../interfaces'

interface AboutProps {
    aboutMeData: AboutMeData
}
const About: React.FC<AboutProps> = ({ aboutMeData }) => {
    return(
        <div>
            <h1>{ aboutMeData.title }</h1>
            <p>{ aboutMeData.bio }</p>
        </div>
    )
}

export default About;