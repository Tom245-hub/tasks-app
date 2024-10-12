import { FC } from "react";
import { TrashSVG } from "../Icons/TrashSVG";

interface Props {
  onClick: () => void;
}

export const ButtonDelete: FC<Props> = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick} className={`flex justify-center items-center h-[34px] w-[34px] form-element`}>
        <TrashSVG />
      </button>
    </>
  );
};
