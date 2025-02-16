import { DesignData, ProjectData, SocialIcons } from "../utils/dataType";
import icons from "./icons"
import images from "./images"


export const socialIcons: SocialIcons[] = [
  {
    src: icons.mail,
    alt: "mail",
    href: "leswulffk@gmail.com",
  },
  {
    src: icons.github,
    alt: "githun",
    href: "https://github.com/lesliekodjoe/",
  },
];

export const projects_data: ProjectData[] = [
  {
    num: "01",
    projectInfo: {
      projectName: "Kweku's Portfolio",
      projectCategory: "Portfolio website",
      projectDescription:
        "In 2024, Force embarked on a mission to update and redesign their website. Their primary objective was to gain the ability to control content seamlessly through a Content Management System (CMS). The redesign aimed to ensure the website's responsiveness across mobile, tablet, and desktop devices. They chose Webflow to facilitate easy and efficient content updates.",
      projectLink: "https://www.google.com",
      projectYear: "2024",
      projectRole: "Developer",
      tech: ["Figma, ", "React, ", "TailwindCSS"],
    },
    media: {
      imageSrc: images.projCard,
      altName: "project 1",
      mockups: [
        images.mock,
        images.mock,
        images.mock,
   
      ],
    },
  },
];

export const design_data: DesignData[] = [
  {
    num: "01",
    designInfo: {
      designDate: "Jan 2024",
      designName: "MenCrud",
      designDescription:
        "Lorem ipsum dolor sit amet consectetur. At lectus donec ut at vitae imperdiet duis diam mollis.",
      designLink: "https://www.google.com",
    },
    designBgColor: "bg-[#FF6F6F]",
    media: {
      imageSrc: images.projCard,
      altName: "project 1",
    },
  },
];

export const tech_stack = [
  "HTML/CSS/TailwindCSS/Bootstrap",
  "JavaScript",
  "ReactJs with TypeScript",
  "NextJS",
  "Redux - New",
  "Php",
  "Python",
  "SQL",
  "MongoDB - New",
];

export const hobbys_data = [
  {
    num: 1,
    imageSrc: images.titan,
    altname: "Attack on Titan",
  },
  {
    num: 2,
    imageSrc: images.lincoln,
    altname: "The Lincoln Lawyer",
  },
  {
    num: 3,
    imageSrc: images.blacklist,
    altname: "Blacklist",
  },
  {
    num: 4,
    imageSrc: images.you,
    altname: "YOU",
  },
  {
    num: 5,
    imageSrc: images.boys,
    altname: "The Boys",
  },
  {
    num: 6,
    imageSrc: images.caped,
    altname: "Batman",
  },
];
