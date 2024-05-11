import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Skills } from "../components/Skills";
import { Certificates } from "../components/Certificates";

export const About = () => {
  return (
    <Layout>
      <div className="title">About Me</div>
      <div className="content">
        Hy I'm a frontend developer with 2 years of experience and I am
        passionate about creating engaging and efficient web experiences with
        the latest technologies. I like to keep up with the latest trends and
        technologies in web development, and I'm always looking for new ways to
        improve the user experience. If you are looking for a passionate and
        committed frontend programmer,
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
