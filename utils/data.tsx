import Email from "@/assets/icons/mail.svg";
import Github from "@/assets/icons/github.svg";
import Twitter from "@/assets/icons/twitter.svg";

import proIMG1 from "@/assets/projectBackground/proIMG1.jpg";
import proIMG2 from "@/assets/projectBackground/proIMG2.jpg";
import proIMG3 from "@/assets/projectBackground/proIMG3.jpg";
import proIMG4 from "@/assets/projectBackground/proIMG4.jpg";
import mock1 from "@/assets/projectBackground/mock1.jpg";

import hobIMG1 from "@/assets/hobb_img/titan.jpg";
import hobIMG2 from "@/assets/hobb_img/lincoln.jpg";
import hobIMG3 from "@/assets/hobb_img/blacklist.jpg";
import hobIMG4 from "@/assets/hobb_img/you.jpg";
import hobIMG5 from "@/assets/hobb_img/boys1.jpg";
import hobIMG6 from "@/assets/hobb_img/caped.jpg";
import { ProjectData, SocialIcons } from "./dataType";


export const socialIcons: SocialIcons[] = [
  {
    src: Email,
    alt: "mail",
    href: "leswulffk@gmail.com",
  },
  {
    src: Github,
    alt: "mail",
    href: "https://github.com/Leswulff23",
  },
  {
    src: Twitter,
    alt: "twitter",
    href: "https://x.com/WulffKodjoe",
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
      tech: ["HTML", "CSS", "JavaScript", "TailwindCSS", "NextJS"],
    },
    media: {
      imageSrc: proIMG1,
      altname: "project 1",
      mockUps: [mock1, mock1, mock1],
    },
  },
  {
    num: "02",
    projectInfo: {
      projectName: "Portfolio Website",
      projectCategory: "",
      projectDescription:
        "In 2024, Force embarked on a mission to update and redesign their website. Their primary objective was to gain the ability to control content seamlessly through a Content Management System (CMS). The redesign aimed to ensure the website's responsiveness across mobile, tablet, and desktop devices. They chose Webflow to facilitate easy and efficient content updates.",
      projectLink: "",
      projectYear: "",
      projectRole: "",
      tech: ["HTML", "CSS", "JavaScript", "TailwindCSS", "NextJS"],
    },
    media: {
      imageSrc: proIMG2,
      altname: "project 2",
      mockUps: [mock1],
    },
  },
  {
    num: "03",
    projectInfo: {
      projectName: "Portfolio Website",
      projectCategory: "",
      projectDescription:
        "In 2024, Force embarked on a mission to update and redesign their website. Their primary objective was to gain the ability to control content seamlessly through a Content Management System (CMS). The redesign aimed to ensure the website's responsiveness across mobile, tablet, and desktop devices. They chose Webflow to facilitate easy and efficient content updates.",
      projectLink: "",
      projectYear: "",
      projectRole: "",
      tech: ["HTML", "CSS", "JavaScript", "TailwindCSS", "NextJS"],
    },
    media: {
      imageSrc: proIMG3,
      altname: "project 3",
      mockUps: [mock1],
    },
  },
  {
    num: "04",
    projectInfo: {
      projectName: "Portfolio Website",
      projectCategory: "",
      projectDescription:
        "In 2024, Force embarked on a mission to update and redesign their website. Their primary objective was to gain the ability to control content seamlessly through a Content Management System (CMS). The redesign aimed to ensure the website's responsiveness across mobile, tablet, and desktop devices. They chose Webflow to facilitate easy and efficient content updates.",
      projectLink: "",
      projectYear: "",
      projectRole: "",
      tech: ["HTML", "CSS", "JavaScript", "TailwindCSS", "NextJS"],
    },
    media: {
      imageSrc: proIMG4,
      altname: "project 4",
      mockUps: [mock1],
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
    imageSrc: hobIMG1,
    altname: "hobby 1",
  },
  {
    num: 2,
    imageSrc: hobIMG2,
    altname: "hobby 2",
  },
  {
    num: 3,
    imageSrc: hobIMG3,
    altname: "hobby 3",
  },
  {
    num: 4,
    imageSrc: hobIMG4,
    altname: "hobby 4",
  },
  {
    num: 5,
    imageSrc: hobIMG5,
    altname: "hobby 5",
  },
  {
    num: 6,
    imageSrc: hobIMG6,
    altname: "hobby 6",
  },
];
