import { AiOutlineStar, AiOutlineBranches } from "react-icons/ai";

export const Card = ({ title, image, description, link, tech }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full md:w-5/6 rounded border border-neutral-500/60 p-3 transition-transform ease-linear hover:bg-gradient-to-tr hover:from-green-400 hover:to-blue-500 hover:border-blue-500 hover:translate-x-2 group"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <img
          src={image}
          alt={`${title} image preview`}
          className="w-full md:w-32 object-cover rounded"
        />
        <div className="flex flex-col justify-start items-start">
          <div className="text-lg md:text-xl font-bold transition-all md:group-hover:text-white">
            {title}
          </div>
          <div className="text-sm text-neutral-700 md:text-base md:group-hover:text-white">
            {description}
          </div>
          <div className="flex flex-wrap gap-4 mt-4 text-xs text-neutral-500 md:group-hover:text-white">
            <div className="inline-flex items-center gap-1 hover:text-yellow-500">
              10 <AiOutlineStar />
            </div>
            <div className="inline-flex items-center gap-1">
              18 <AiOutlineBranches />
            </div>
            <div className="inline-flex items-center gap-1 flex-wrap">
              {tech.map((item, i) => (
                <p key={i}>{`${item}${tech.length !== i + 1 ? "," : ""}`}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
