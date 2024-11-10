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
    src: "/assets/icons/mail.svg",
    alt: "mail",
    href: "leswulffk@gmail.com",
  },
  {
    src: "/assets/icons/github.svg",
    alt: "mail",
    href: "https://github.com/Leswulff23",
  },
  {
    src: "/assets/icons/twitter.svg",
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
      imageSrc: "/assets/projectBackground/proIMG1.jpg",
      altname: "project 1",
      mockUps: [
        "/assets/projectBackground/mock1.jpg",
        "/assets/projectBackground/mock1.jpg",
        "/assets/projectBackground/mock1.jpg",
      ],
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
      imageSrc: "/assets/projectBackground/proIMG2.jpg",
      altname: "project 2",
      mockUps: ["/assets/projectBackground/mock1.jpg"],
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
      imageSrc: "/assets/projectBackground/proIMG3.jpg",
      altname: "project 3",
      mockUps: ["/assets/projectBackground/mock1.jpg"],
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
      imageSrc: "/assets/projectBackground/proIMG4.jpg",
      altname: "project 4",
      mockUps: ["/assets/projectBackground/mock1.jpg"],
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
