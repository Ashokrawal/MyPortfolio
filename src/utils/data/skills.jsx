import {
  DiAngularSimple,
  DiCss3,
  DiDocker,
  DiGit,
  DiGithub,
  DiHtml5,
  DiJavascript,
  DiMongodb,
  DiMysql,
  DiNodejs,
  DiNpm,
  DiPostgresql,
  DiReact,
  DiPython,
  DiRedis,
  DiSqllite,
} from "react-icons/di";
import {
  SiExpress,
  SiNestjs,
  SiSvelte,
  SiTypescript,
  SiNextdotjs,
  SiVuedotjs,
} from "react-icons/si";

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
        name: "Python",
        icon: <DiPython />,
      },
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
    ],
  },
  {
    title: "Databases",
    items: [
      {
        name: "MySQL",
        icon: <DiMysql />,
      },
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
