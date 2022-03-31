import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'

import { NotFound } from '../components';

const ProjectDetail: React.FC = () => {
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
            <ReactMarkdown>
                { projectReadmeContent }
            </ReactMarkdown>
        )
    }
    if ( loading ) {
        return (<span>Loading...</span>)
    }
    if ( error ) {
        return (<span>An error occured... Please try again later</span>)
    }
    else {
        return(<span>An error occured... Please try again later</span>)
    }

}

export default ProjectDetail;