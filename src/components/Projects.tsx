import React from 'react';
import { Link } from 'react-router-dom';

import { Project } from '../interfaces'
interface  ProjectsProps {
    projects: Project[]
}
const Projects: React.FC<ProjectsProps> = ({ projects }): React.ReactElement => {
    return (<div className="container-fluid mt-4" style={{minHeight: "100vh"}}>
        <div className="row">
            {projects.map(project => {
                return (
                    <div className="col-lg-6 d-flex align-items-stretch">
                        <Link to={`project/${project.id}`} className="card mb-4">
                            <img className="card-img-top" src={project.thumbnail} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{project.name}</h5>
                                <p className="card-text">{project.description}</p>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    </div>)
}

export default Projects;