import { FC } from "react";

import { CheckSVG } from "../Icons/CheckSVG";

interface Props {
  label: string;
  tmpUid: string;
  setChecked: (tmpUid: string, checked: boolean) => void;
  checked: boolean;
}

export const Checkbox: FC<Props> = ({ label, tmpUid, checked, setChecked }) => {
  const id = "checkbox" + "-" + tmpUid;
  const activeLabel = checked ? "text-primary" : "text-grayDark";
  const activeCheckbox = checked ? "bg-primary border-primary " : "border-graySuperLight hover:border-gray-400";

  const handleChange = () => {
    setChecked(tmpUid, !checked);
  };

  return (
    <>
      <div className="flex items-center gap-1 ">
        <div className="flex items-center relative">
          <input
            type="checkbox"
            id={id}
            className={`appearance-none h-[18px] w-[18px] border-2 border-graySuperLight rounded-md ${activeCheckbox} transition duration-300`}
            onChange={handleChange}
          />

          {checked && (
            <span className="absolute left-[4px] pointer-events-none">
              <CheckSVG />
            </span>
          )}
        </div>

        <label htmlFor={id} className={`relative -top-[1px] font-medium ml-2 select-none ${activeLabel}`}>
          {label}
        </label>
      </div>
    </>
  );
};
