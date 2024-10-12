import { FC, useState } from "react";

import { CheckSVG } from "../Icons/CheckSVG";

interface Props {
  label: string;
  tmpUid?: string;
}

export const Checkbox: FC<Props> = ({ label, tmpUid }) => {
  const [checked, setChecked] = useState(false);

  const id = "checkbox" + "-" + tmpUid;
  const active = checked ? "text-[#17A2B8]" : "text-[#6C757D]";

  const handleChange = () => setChecked((prev) => !prev);

  return (
    <>
      <div className="flex items-center gap-1">
        <div className="flex items-center relative">
          <input
            type="checkbox"
            id={id}
            className="appearance-none h-[18px] w-[18px] border-2 border-[#CED4DA] rounded-md checked:bg-[#17A2B8] checked:border-0"
            onChange={handleChange}
          />

          {checked && (
            <span className="absolute left-[4px] pointer-events-none">
              <CheckSVG />
            </span>
          )}
        </div>

        <label htmlFor={id} className={`relative -top-[1px] font-medium ml-2  ${active}`}>
          {label}
        </label>
      </div>
    </>
  );
};
