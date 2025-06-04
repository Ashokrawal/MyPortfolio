import { useGithub } from "../hooks/useGithub";

export const User = () => {
  const { user } = useGithub();

  return (
    <a
      href="https://github.com/Ashokrawal"
      className="flex justify-start content-start items-center gap-4 group px-3 py-1 border border-transparent rounded-xl hover:border-neutral-500 hover:bg-white/5 hover:cursor-pointer"
      target="_blank"
    >
      <img
        src={"/ashok_passport-pic.png"}
        alt={`${user?.login} user image`}
        className="rounded-full"
        width={32}
        height={32}
      />
      <div className="information text-start">
        <div className="text-white group-hover:underline">Deepak Ashok</div>
        <div className="text-sm text-neutral-500">Full Stack Developer</div>
      </div>
    </a>
  );
};
