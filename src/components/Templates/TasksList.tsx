import { FC, useContext } from "react";

import { Checkbox } from "../FormElements/Checkbox";
import { TasksContext } from "../../context/TasksProvider";
import { ITask, ITasksContext, TasksFilter } from "../../types/task";

export const TasksList: FC = () => {
  const { tasksList, tasksFilter, setCompletedTask } = useContext(TasksContext) as ITasksContext;

  const filterTasks = (tasks: ITask[]) => {
    switch (tasksFilter) {
      case TasksFilter.HIDE_COMPLATED:
        return tasks.filter((task) => !task.completed);
      case TasksFilter.SHOW_ALL:
      default:
        return tasks;
    }
  };

  const filteredTasks = filterTasks(tasksList);

  return (
    <>
      <div className="flex flex-col w-[285px] gap-4 p-4 rounded-lg border border-[#DEE2E6]">
        {filteredTasks.map((task) => (
          <Checkbox key={task.tmpUid} label={task.title} tmpUid={task.tmpUid} setChecked={setCompletedTask} checked={task.completed} />
        ))}
      </div>
    </>
  );
};
