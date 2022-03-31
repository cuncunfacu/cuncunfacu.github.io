import React from 'react';
import { Link } from 'react-router-dom';

import { Project } from '../interfaces'
interface  ProjectsProps {
    projects: Project[]
}
const Projects: React.FC<ProjectsProps> = ({ projects }): React.ReactElement => {
    return (<ul>
        {projects.map(project => {
            return (<li key={project.id}>
                        <Link to={`/project/${project.id}`}>{project.name}</Link>
                    </li>)
        })}
    </ul>)
}

export default Projects;