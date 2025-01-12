export interface ResumeData {
    header: Header;
    profile: Profile;
    education: Education;
    skills: SkillCategory[];
    experiences: Experience[];
    awards: Award[];
}

export interface Header {
    name: string;
    email: string;
    linkedIn: string;
    location: string;
    description: string[];
}

export interface Profile {
    description: string[];
}

export interface Education {
    degree: string;
    university: string;
    duration: string;
}

export interface SkillCategory {
    category: string;
    items: string[];
}

export interface Experience {
    title: string;
    duration: string;
    location: string;
    responsibilities: string[];
}

export interface Award {
    title: string;
    description: string;
}
