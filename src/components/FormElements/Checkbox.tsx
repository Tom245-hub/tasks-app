import { FC, useState } from "react";

import { CheckSVG } from "../Icons/CheckSVG";

interface Props {
  label: string;
}

export const Checkbox: FC<Props> = ({ label }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => setChecked((prev) => !prev);

  return (
    <>
      <div className="flex items-center gap-1">
        <div className="flex items-center relative">
          <input
            type="checkbox"
            id="checkbox"
            className="appearance-none h-[18px] w-[18px] border-2 border-[#CED4DA] rounded-md checked:bg-[#17A2B8] checked:border-0"
            onChange={handleChange}
          />

          {checked && (
            <span className="absolute left-[4px] pointer-events-none">
              <CheckSVG />
            </span>
          )}
        </div>

        <label htmlFor="checkbox" className="relative -top-[1px] font-medium ml-2 text-[#6C757D]">
          {label}
        </label>
      </div>
    </>
  );
};
