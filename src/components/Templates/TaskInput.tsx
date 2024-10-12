import { FC, useContext } from "react";

import { InputTextArrow } from "../FormElements/InputTextArrow";
import { TasksContext } from "../../context/TasksProvider";
import { ITasksContext } from "../../types/task";

export const TaskInput: FC = () => {
  const { addNewTask } = useContext(TasksContext) as ITasksContext;

  return (
    <>
      <InputTextArrow placeholder="New task input" press={addNewTask} />
    </>
  );
};
