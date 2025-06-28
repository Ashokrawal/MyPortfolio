import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Skills } from "../components/Skills";
import { Certificates } from "../components/Certificates";

export const About = () => {
  return (
    <Layout>
      <div className="title pt-8">About Me</div>
      <div className="content">
        Hi, Full-Stack Developer with nearly 3 years of experience,
        transitioning from a front-end focus to building full MERN stack
        applications. Skilled in creating responsive, user-friendly interfaces
        using HTML, CSS, JavaScript, and React, and now proficient in developing
        robust back-end services with Node.js, Express, and MongoDB. Adept at
        designing RESTful APIs, handling authentication, integrating databases,
        and deploying full-stack apps using AWS and Docker. Passionate about
        building scalable, end-to-end web solutions and continuously learning
        modern technologies like Three.js. If you're looking for a committed and
        enthusiastic frontend programmer who's eager to grow and contribute to
        impactful projects, I'd love to connect.
        <Link
          className="underline text-blue-700 font-bold cursor-pointer"
          to="/contact"
        >
          Feel Free to Contact Me!.
        </Link>
      </div>
      <Skills />
      <Certificates />
    </Layout>
  );
};
