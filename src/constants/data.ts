import { DesignData, ProjectData, SocialIcons } from "../utils/dataType";
import icons from "./icons";
import images from "./images";

export const socialIcons: SocialIcons[] = [
  {
    src: icons.github,
    alt: "githun",
    href: "https://github.com/lesliekodjoe/",
  },
];

export const projects_data: ProjectData[] = [
  {
    num: 1,
    projectInfo: {
      projectName: "Kweku's Portfolio",
      projectCategory: "Portfolio website",
      projectDescription:
        "In 2024, Kweku aimed to showcase his skills, experience, work & research. The design aimed to ensure the website's responsiveness across devices with smooth animations.",
      projectLink: "https://kwekuyamoah.github.io/",
      projectYear: "2024",
      projectRole: ["Designer", "Developer"],
      tech: ["Figma", "React + TypeScript", "TailwindCSS"],
    },
    media: {
      imageSrc: images.kweku_main,
      altName: "project 1",
      mockups: [images.kweku_mock1, images.kweku_mock2, images.kweku_mock3],
    },
  },
  {
    num: 2,
    projectInfo: {
      projectName: "Experiential Transcript",
      projectCategory: "Website",
      projectDescription:
        "Get an overview of the Experiential Transcript process, from capturing learning experiences to generating your official transcript. Easily update your account details and manage your profile to ensure accurate and up-to-date information",
      projectLink: "https://apps.ashesi.edu.gh/",
      projectYear: "2022",
      projectRole: ["Designer", "Developer"],
      tech: ["Figma", "HTML", "TailwindCSS"],
    },
    media: {
      imageSrc: images.exp,
      altName: "project 2",
      mockups: [images.exp_mock1, images.exp_mock2, images.exp_mock3],
    },
  },
  {
    num: 3,
    projectInfo: {
      projectName: "Netflix Clone",
      projectCategory: "Website",
      projectDescription:
        "Netflix Clone – A responsive layout platform built with Webflow, replicating Netflix's UI but updating the Hero with an animation",
      projectLink: "https://lesliekodjoe.github.io/Netflix-Clone/",
      projectYear: "2022",
      projectRole: ["Designer", "Developer"],
      tech: ["Webflow"],
    },
    media: {
      imageSrc: images.net,
      altName: "project 2",
      mockups: [images.net_mock1, images.net_mock2, images.net_mock3],
    },
  },
];

export const design_data: DesignData[] = [
  {
    num: "01",
    designInfo: {
      designDate: "Jan 2024",
      designName: "Helt",
      designDescription:
        "HELT connects medical supply businesses and individuals with clients searching for consumables, equipment, and more.",
      designLink:
        "https://www.figma.com/proto/i4LBzBWAv0b0vbhagmA4NZ/HELT?page-id=129%3A2&node-id=130-19&p=f&viewport=342%2C252%2C0.09&t=5B4cF8inN50qTLIq-1&scaling=min-zoom&content-scaling=fixed",
    },
    designBgColor: "bg-[#00A6CB]",
    designBorderColor: "border-[#00A6CB]",
    media: {
      imageSrc: images.helt_design,
      altName: "project 1",
    },
  },
  {
    num: "02",
    designInfo: {
      designDate: "Jan 2024",
      designName: "Track Guide",
      designDescription:
        "A web platform designed to connect students with tutors based on their selected courses. Lecturers can assign tutors to students in need of academic support.",
      designLink:
        "https://www.figma.com/proto/UEN6Edj509bU6SO16vRJy8/TrackGuide?page-id=7%3A2&node-id=203-3&p=f&viewport=-111%2C273%2C0.08&t=ehyIzOBKyjMcYcQW-1&scaling=scale-down-width&content-scaling=fixed",
    },
    designBgColor: "bg-[#374151]",
    designBorderColor: "border-[#374151]",

    media: {
      imageSrc: images.track_design,
      altName: "project 1",
    },
  },
  {
    num: "03",
    designInfo: {
      designDate: "Jan 2024",
      designName: "Pod K",
      designDescription:
        "Listen and playback a world of stories, news, and entertainment tailored to your interests anytime, anywhere.",
      designLink:
        "https://www.figma.com/proto/oX2GlmyEduMDsZ8DJ3YsGI/PodK?page-id=16%3A323&node-id=42-54&viewport=470%2C-295%2C0.49&t=0TwMYFQuabyK9Pqn-1&scaling=min-zoom&content-scaling=fixed",
    },
    designBgColor: "bg-[#9C6DDB]",
    designBorderColor: "border-[#9C6DDB]",
    media: {
      imageSrc: images.podk_design,
      altName: "project 1",
    },
  },
];

export const tech_stack = [
  "HTML/CSS/TailwindCSS/Bootstrap",
  "JavaScript",
  "ReactJs with TypeScript",
  "React Native",
  "NextJS",
  "Php",
  "Python, Django",
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
