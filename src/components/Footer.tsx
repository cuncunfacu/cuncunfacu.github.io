import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Language } from '../interfaces';

const Footer: React.FC = () => {
    const selectedLanguage = useSelector((state: RootState) => state.siteData.selectedLanguage)
    return (
        <footer className=" mt-auto text-center text-lg-start bg-light text-muted">
            <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                {selectedLanguage == Language.English ? "Made from scratch by me" : "Hecho desde cero por mi"}
            </div>
        </footer>
    )
}

export default Footer;