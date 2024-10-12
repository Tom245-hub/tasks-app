import { FC } from "react";

import { ArrowSVG } from "../Icons/ArrowSVG";

interface Props {
  placeholder: string;
}

export const InputTextArrow: FC<Props> = ({ placeholder }) => {
  return (
    <>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          className="h-[48px] w-full border border-[#DEE2E6] pl-6 pr-12 rounded-lg placeholder:text-[#54595E] placeholder:font-semibold"
        />
        <span className="cursor-pointer absolute right-4 top-0 transform translate-y-1/2">
          <ArrowSVG />
        </span>
      </div>
    </>
  );
};
