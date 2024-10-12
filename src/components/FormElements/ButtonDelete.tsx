import { FC } from "react";
import { TrashSVG } from "../Icons/TrashSVG";

interface Props {
  onClick: () => void;
}

export const ButtonDelete: FC<Props> = ({ onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`flex justify-center items-center h-[34px] w-[34px] border border-[#DEE2E6] rounded-lg transition duration-300 ease-in-out 
                  hover:bg-[#f0f0f0] hover:border-[#CED4DA] focus:outline-none`}
      >
        <TrashSVG />
      </button>
    </>
  );
};
