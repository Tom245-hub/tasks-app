import { FC, useContext } from "react";

import { Checkbox } from "../FormElements/Checkbox";
import { TasksContext } from "../../context/TasksProvider";
import { ITasksContext } from "../../types/task";

export const TasksList: FC = () => {
  const { tasksList } = useContext(TasksContext) as ITasksContext;

  return (
    <>
      <div className="flex flex-col w-[285px] gap-4 p-4 rounded-lg border border-[#DEE2E6]">
        {tasksList.map((task) => (
          <Checkbox key={task.tmpUid} label={task.title} tmpUid={task.tmpUid} />
        ))}
      </div>
    </>
  );
};
