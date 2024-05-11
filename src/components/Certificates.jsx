import React from "react";

const certificates = [
  {
    title: "Master in Business Administration (Cloud Computing)",
    institute: "Dublin Business School, Ireland.",
    year: "2024-2025",
  },
  {
    title: "Becholor's of Computer Applications",
    institute: "Sri Krishnadevaraya University",
    year: "2021",
  },
  {
    title: "Maths Physics Chemistry",
    institute: "Board of Intermediate of Andhra Pradesh, India",
    year: "2018",
  },
  {
    title: "High School",
    institute: "Board of Secondary of Andhra Pradesh, India",
    year: "2016",
  },
];

export const Certificates = () => {
  return (
    <>
      <div className="title">Education Details</div>
      <ul>
        {certificates.map((value, i) => (
          <li key={i}>
            <p className="font-bold text-white">
              {value.title}
              <span className="content font-normal text-sm">
                {" "}
                - {value.institute} -{" "}
                <span className="italic">{value.year}</span>
              </span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};
