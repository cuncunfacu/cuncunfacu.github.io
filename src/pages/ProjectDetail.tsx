import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { NotFound, Loading } from '../components';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Language } from '../interfaces';

import gitHub from '../assets/images/github.svg';

const ProjectDetail: React.FC = ( ) => {
    const { projectId } = useParams<{projectId: string}>();
    const [ projectReadmeContent, setProjectReadmeContent ] = useState<string | undefined>(undefined);
    const [ notFound, setNotFound ] = useState(false);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);

    const selectedLanguage = useSelector((state: RootState) => state.siteData.selectedLanguage)

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
                }
                setLoading(false)
            })();
        }
        , []);
    if (notFound) {
        return (< NotFound />)
    }
    if (loading) { return (<Loading />) }
    if (projectReadmeContent) {
        return (
            <div className="col">
                <div className="row p-4 d-flex justify-content-center">
                    <div className="col-lg-2 d-flex">
                        <a className="btn btn-secondary" href={'https://github.com/cuncunfacu/' + projectId} role="button" target="_blank" rel="noreferrer">
                            <span>{selectedLanguage == Language.Spanish ? "Visitar código  " : "View Code  "}</span>
                            <img src={gitHub} alt='GitHub Logo' style={{ height: '1.5rem' }} />
                        </a>
                    </div>
                </div>
                <div className="row mkdown p-2">
                    <ReactMarkdown>
                        {projectReadmeContent}
                    </ReactMarkdown>
                </div>
            </div>
        )
    }
    if ( error ) {
        return (<span>An error occured... Please try again later</span>)
    }
    else {
        return(<span>An error occured... Please try again later</span>)
    }

}

export default ProjectDetail;