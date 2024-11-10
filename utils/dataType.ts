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

interface Media {
  imageSrc: string;
  altname: string;
  mockUps: string[];
}

export interface ProjectData {
  num: string;
  projectInfo: ProjectInfo;
  media: Media;
}
