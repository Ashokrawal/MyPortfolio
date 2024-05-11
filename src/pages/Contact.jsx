import { Layout } from "../components/Layout";
import cv from "/public/cv.pdf";

export const Contact = () => {
  const mail = "ashokrawaldz@gmail.com";
  return (
    <Layout>
      <div className="title">Contact</div>
      <p className="my-2">
        Hello! Ready to create something amazing together? Click here to send me
        a message and let's start building the future together.
      </p>
      <a href={`mailto:${mail}`} target="_blank" className="my-2">
        <div className="relative border border-transparent rounded cursor-pointer group hover:border-blue-500">
          <img
            src="/gradient.jpeg"
            alt="gradient image"
            className="rounded h-32 w-full"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-2xl text-indigo-300 group-hover:text-indigo-100 transition-colors">
            Email <br />
          </div>
        </div>
      </a>
      <p className="my-2">
        other ways to connect,
        <strong>Hope to hear from you soon! Thank you!</strong>
      </p>
      <div className="grid grid-cols-2 grid-flow-row gap-2">
        <a
          href="https://github.com/Ashokrawal"
          target="_blank"
          className="my-2"
        >
          <div className="relative border border-transparent rounded cursor-pointer group hover:border-blue-500">
            <img
              src="/gradient.jpeg"
              alt="gradient image"
              className="rounded h-32 w-full"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-2xl text-indigo-300 group-hover:text-indigo-100 transition-colors">
              Github
            </div>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/deepak-ashok-499202271/"
          target="_blank"
          className="my-2"
        >
          <div className="relative border border-transparent rounded cursor-pointer group hover:border-blue-500">
            <img
              src="/gradient.jpeg"
              alt="gradient image"
              className="rounded h-32 w-full"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-2xl text-indigo-300 group-hover:text-indigo-100 transition-colors">
              Linkedin
            </div>
          </div>
        </a>
        <div className="col-span-full">
          <a href={cv} target="_blank">
            <div className="relative border border-transparent rounded cursor-pointer group hover:border-blue-500">
              <img
                src="/gradient.jpeg"
                alt="gradient image"
                className="rounded h-32 w-full"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-2xl text-indigo-300 group-hover:text-indigo-100 transition-colors">
                Download Resume
              </div>
            </div>
          </a>
        </div>
      </div>
    </Layout>
  );
};
