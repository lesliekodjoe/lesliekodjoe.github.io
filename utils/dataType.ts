import { StaticImageData } from "next/image";

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
  projectRole: string;
  tech: string[];
}

interface DesignInfo {
  designDate: string;
  designName: string;
  designDescription: string;
  designLink: string;
}

interface DesignMedia {
  imageSrc: string;
  altname: string;
}

interface ProjectMedia {
  imageSrc: string;
  altname: string;
  mockUps: string[];
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
  media: DesignMedia
}
