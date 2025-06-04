import {
  DiCss3,
  DiDocker,
  DiGit,
  DiGithub,
  DiHtml5,
  DiJavascript,
  DiMongodb,
  DiNodejs,
  DiNpm,
  DiReact,
  DiPython,
  DiBootstrap,
  DiJira,
  DiAws,
  DiSqllite,
} from "react-icons/di";
import { SiExpress, SiTypescript, SiNextdotjs } from "react-icons/si";

export const skills = [
  {
    title: "Frontend",
    items: [
      { name: "NextJs", icon: <SiNextdotjs /> },
      {
        name: "HTML",
        icon: <DiHtml5 />,
      },
      {
        name: "CSS",
        icon: <DiCss3 />,
      },
      {
        name: "JavaScript",
        icon: <DiJavascript />,
      },
      {
        name: "React",
        icon: <DiReact />,
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        name: "NodeJs",
        icon: <DiNodejs />,
      },
      { name: "ExpressJs", icon: <SiExpress /> },
    ],
  },
  {
    title: "Other",
    items: [
      {
        name: "Git",
        icon: <DiGit />,
      },
      {
        name: "Github",
        icon: <DiGithub />,
      },
      {
        name: "NPM",
        icon: <DiNpm />,
      },
      {
        name: "Docker",
        icon: <DiDocker />,
      },
      {
        name: "Typescript",
        icon: <SiTypescript />,
      },
      { name: "Python", icon: <DiPython /> },
      { name: "Aws", icon: <DiAws /> },
      { name: "Jira", icon: <DiJira /> },
      { name: "BootStrap", icon: <DiBootstrap /> },
    ],
  },
  {
    title: "Databases",
    items: [
      {
        name: "SQLite",
        icon: <DiSqllite />,
      },
      {
        name: "MongoDB",
        icon: <DiMongodb />,
      },
    ],
  },
];
