import { FC, useState } from "react";

import { ArrowSVG } from "../Icons/ArrowSVG";

interface Props {
  placeholder: string;
  press: (input: string) => void;
}

export const InputTextArrow: FC<Props> = ({ placeholder, press }) => {
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    press(input);
    setInput("");
  };

  return (
    <>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
          value={input}
          className="h-[48px] w-full border border-[#DEE2E6] pl-6 pr-12 rounded-lg placeholder:text-[#54595E] placeholder:font-semibold"
        />

        <span className="cursor-pointer absolute right-4 top-0 transform translate-y-1/2" onClick={handleClick}>
          <ArrowSVG />
        </span>
      </div>
    </>
  );
};
