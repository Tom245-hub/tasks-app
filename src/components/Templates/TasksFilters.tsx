import { FC } from "react";

export const TasksFilters: FC = () => {
  return (
    <>
      <div className="flex justify-between gap-4">
        <button className="h-9 w-full bg-[#17A2B8] text-white pl-6 pr-4 rounded-lg font-semibold whitespace-nowrap">Show all</button>
        <button className="h-9 w-full border border-[#DEE2E6] text-[#54595E] pl-6 pr-4 rounded-lg font-medium whitespace-nowrap">Hide complated</button>
      </div>
    </>
  );
};
