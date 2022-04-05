interface Project {
    id: string
    name: string,
    description: string,
    thumbnail: string
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

enum Language {
    Spanish = "Esp",
    English = "Eng"
    }

export {type HomeData, type Project, type SiteData, type AboutMeData, Language}