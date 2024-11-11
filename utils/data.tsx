import { ProjectData, SocialIcons } from "./dataType";


export const socialIcons: SocialIcons[] = [
  {
    src: "/assets/icons/mail.svg",
    alt: "mail",
    href: "leswulffk@gmail.com",
  },
  {
    src: "/assets/icons/github.svg",
    alt: "mail",
    href: "https://github.com/Leswulff23",
  }
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
      imageSrc: "/assets/projectBackground/projCard1.png",
      altname: "project 1",
      mockUps: [
        "/assets/projectBackground/mock1.jpg",
        "/assets/projectBackground/mock1.jpg",
        "/assets/projectBackground/mock1.jpg",
      ],
    },
  },
];

export const tech_stack = [
  "HTML/CSS/TailwindCSS",
  "JavaScript",
  "ReactJs with TypeScript",
  "Redux",
  "Php",
  "Python",
  "SQL",
];

export const hobbys_data = [
  {
    num: 1,
    imageSrc: "/assets/hobb_img/titan.jpg",
    altname: "hobby 1",
  },
  {
    num: 2,
    imageSrc: "/assets/hobb_img/lincoln.jpg",
    altname: "hobby 2",
  },
  {
    num: 3,
    imageSrc: "/assets/hobb_img/blacklist.jpg",
    altname: "hobby 3",
  },
  {
    num: 4,
    imageSrc: "/assets/hobb_img/you.jpg",
    altname: "hobby 4",
  },
  {
    num: 5,
    imageSrc: "/assets/hobb_img/boys1.jpg",
    altname: "hobby 5",
  },
  {
    num: 6,
    imageSrc: "/assets/hobb_img/caped.jpg",
    altname: "hobby 6",
  },
];
