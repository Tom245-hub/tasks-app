import { FC } from "react";

import { TasksList } from "./components/TasksList";
import { TaskInput } from "./components/TaskInput";
import { TasksFilters } from "./components/TasksFilters";

export const App: FC = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col w-[285px] gap-4">
          <TaskInput />
          <TasksFilters />
          <TasksList />
        </div>
      </div>
    </>
  );
};
