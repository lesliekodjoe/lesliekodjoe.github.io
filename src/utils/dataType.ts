export interface SocialIcons {
  src: string;
  alt: string;
  href: string;
}

interface ProjectInfo {
  projectName: string;
  projectCategory: string;
  projectDescription: string;
  projectLink: string;
  projectYear: string;
  projectRole: readonly string[];
  tech: readonly string[];
}

interface DesignInfo {
  designDate: string;
  designName: string;
  designDescription: string;
  designLink: string;
}

interface DesignMedia {
  imageSrc: string;
  altName: string; 
}

interface ProjectMedia {
  imageSrc: string;
  altName: string;
  mockups: string[];
}

export interface ProjectData {
  num: string;
  projectInfo: ProjectInfo;
  media: ProjectMedia;
}

export interface DesignData {
  num: string;
  designInfo: DesignInfo;
  designBgColor: string;
  designBorderColor: string;
  media: DesignMedia;
}
