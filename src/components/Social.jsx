import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineCompass,
} from "react-icons/ai";

export const Social = () => {
  return (
    <>
      <a
        href="https://github.com/Ashokrawal/my-portfolio.git"
        className="hover:text-neutral-500 transition-colors ease-in-out"
        target="_blank"
      >
        <AiOutlineGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/deepak-ashok-499202271/"
        className="hover:text-blue-700 transition-colors ease-in-out"
        target="_blank"
      >
        <AiOutlineLinkedin />
      </a>
    </>
  );
};
