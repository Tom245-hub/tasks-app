import { FC } from "react";

import { Checkbox } from "./FormElements/Checkbox";

export const TasksList: FC = () => {
  return (
    <>
      <div className="flex flex-col w-[285px] gap-4 p-4 rounded-lg border border-[#DEE2E6]">
        <Checkbox label="Prepare dinner" />
      </div>
    </>
  );
};
