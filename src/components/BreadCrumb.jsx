import { useState } from "react";
import { AiOutlineFolder } from "react-icons/ai";

const Button = ({ callback, data, value, current, setCurrent }) => {
  const handleSelect = (e) => {
    e.preventDefault();
    setCurrent(value);
    callback(data[value]);
  };

  return (
    <li onClick={handleSelect}>
      <a
        className={`uppercase text-2xl md:text-3xl ${
          current === value ? "text-blue-500" : "text-normal"
        } inline-flex items-center gap-4`}
      >
        <>
          <AiOutlineFolder size={28} />
          {value}
        </>
      </a>
    </li>
  );
};

export const BreadCrumb = ({ callback, data }) => {
  const [current, setCurrent] = useState("frontend");
  return (
    <div className="text-xl lg:text-2xl breadcrumbs p-4">
      <ul>
        {["frontend"].map((item, i) => (
          <Button
            callback={callback}
            data={data}
            value={item}
            current={current}
            setCurrent={setCurrent}
            key={i}
          />
        ))}
      </ul>
    </div>
  );
};
