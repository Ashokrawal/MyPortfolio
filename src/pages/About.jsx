import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Skills } from "../components/Skills";
import { Certificates } from "../components/Certificates";

export const About = () => {
  return (
    <Layout>
      <div className="title">About Me</div>
      <div className="content">
        Hi, I'm a frontend developer with nearly 3 years of experience building
        engaging, efficient, and responsive web applications. I'm passionate
        about crafting user-centric interfaces using the latest technologies and
        design practices. I stay up to date with current trends in web
        development and constantly look for new ways to enhance the user
        experience. Recently, I’ve started expanding my skill set by learning
        Node.js and working with databases, with the goal of becoming a
        full-stack developer. If you're looking for a committed and enthusiastic
        frontend programmer who's eager to grow and contribute to impactful
        projects, I'd love to connect.
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
