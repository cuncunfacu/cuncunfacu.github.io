interface Project {
    id: string
    name: string,
    description: string,
    readmeUrl: string
}

interface HomeData {
    title: string,
    description: string,
    aboutMeDesc: string,
    projects: Project[]
}

export {type HomeData, type Project}