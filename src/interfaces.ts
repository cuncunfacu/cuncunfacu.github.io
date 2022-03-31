interface Project {
    id: string
    name: string,
    description: string,
    readmeUrl: string
}

interface HomeData {
    title: string,
    description: string,
    projects: Project[]
}

interface AboutMeData {
    title: string,
    bio: string
}

interface SiteData {
    homeData: HomeData
    aboutMeData: AboutMeData
}

export {type HomeData, type Project, type SiteData}