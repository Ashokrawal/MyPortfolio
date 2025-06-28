import { Layout } from "../components/Layout";
import cv from "/cv.pdf";

export const Contact = () => {
  const mail = "ashokrawaldz@gmail.com";

  const buttonClass =
    "relative border border-transparent rounded cursor-pointer group hover:border-blue-500 w-full h-20 sm:h-24 block";

  const buttonTextClass =
    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-sm sm:text-lg text-indigo-300 group-hover:text-indigo-100 transition-colors";

  return (
    <Layout>
      <div className="title pt-8">Contact</div>

      <p className="my-2">
        Hello! Ready to create something amazing together? Click below to send
        me a message and let's start building the future together.
      </p>

      <a href={`mailto:${mail}`} className={buttonClass}>
        <img
          src="/gradient.jpeg"
          alt="Email background"
          className="rounded w-full h-full object-cover"
        />
        <div className={buttonTextClass}>Email</div>
      </a>

      <p className="my-2 py-6">
        Other ways to connect,{" "}
        <strong>Hope to hear from you soon! Thank you!</strong>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* GitHub */}
        <a
          href="https://github.com/Ashokrawal"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
        >
          <img
            src="/gradient.jpeg"
            alt="GitHub background"
            className="rounded w-full h-full object-cover"
          />
          <div className={buttonTextClass}>GitHub</div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/deepak-ashok-499202271/"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
        >
          <img
            src="/gradient.jpeg"
            alt="LinkedIn background"
            className="rounded w-full h-full object-cover"
          />
          <div className={buttonTextClass}>LinkedIn</div>
        </a>

        {/* Resume */}
        <a
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonClass} col-span-full`}
        >
          <img
            src="/gradient.jpeg"
            alt="Resume background"
            className="rounded w-full h-full object-cover"
          />
          <div className={buttonTextClass}>Download Resume</div>
        </a>
      </div>
    </Layout>
  );
};
