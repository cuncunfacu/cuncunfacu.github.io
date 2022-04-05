import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'

import { NotFound, Loading } from '../components';
import { Language } from '../interfaces';

import gitHub from '../assets/images/github.svg';

interface projectDetailProps {
    selectedLanguage: Language
}
const ProjectDetail: React.FC<projectDetailProps> = ( { selectedLanguage} ) => {
    const { projectId } = useParams<{projectId: string}>();
    const [ projectReadmeContent, setProjectReadmeContent ] = useState<string | undefined>(undefined);
    const [ notFound, setNotFound ] = useState(false);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);

    useEffect(
        () => {
            (async () => {
                try {
                    const projectReadMe = await fetch(`https://raw.githubusercontent.com/cuncunfacu/${projectId}/main/README.md`);
                    if (projectReadMe.status == 200) {
                        const RMText: string = await projectReadMe.text()
                        setProjectReadmeContent( RMText )
                    }
                    if ( projectReadMe.status == 404) {
                        setNotFound(true)
                    }
                    else {
                        setError(true)
                    }
                } catch (err) {
                    setError(true)
                    console.log(err);
                }
            })();
        }
        , []);
    if ( notFound ) {
        return ( < NotFound />)
    }
    if (projectReadmeContent) {
        return (
            <div className="col">
                <div className="row p-4 d-flex justify-content-center">
                    <div className="col-lg-2">
                        <a className="btn btn-secondary" href={'https://github.com/cuncunfacu/' + projectId} role="button" target="_blank">
                        <span>{selectedLanguage == Language.Spanish ? "Visitar código  " : "View Code  "}</span>
                        <img src={gitHub} alt='GitHub Logo' style={{height: '1.5rem'}}/>
                        </a>
                    </div>
                </div>
                <div className="row mkdown">
                    <ReactMarkdown>
                        {projectReadmeContent}
                    </ReactMarkdown>
                </div>
            </div>
        )
    }
    if (loading) {
        return (<Loading />)
    }
    if ( error ) {
        return (<span>An error occured... Please try again later</span>)
    }
    else {
        return(<span>An error occured... Please try again later</span>)
    }

}

export default ProjectDetail;