import { FC, useContext } from "react";

import { Checkbox } from "../FormElements/Checkbox";
import { TasksContext } from "../../context/TasksProvider";
import { ITask, ITasksContext, TasksFilter } from "../../types/task";
import { ButtonDelete } from "../FormElements/ButtonDelete";

export const TasksList: FC = () => {
  const { tasksList, tasksFilter, setCompletedTask, deleteTask } = useContext(TasksContext) as ITasksContext;

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

  const empty = <h5 className="text-grayMedium text-center font-semibold">Empty list</h5>;

  return (
    <>
      <div className="flex flex-col w-[285px] gap-4 p-4 rounded-lg border border-grayLight">
        {filteredTasks.length
          ? filteredTasks.map((task) => (
              <div className="flex justify-between gap-2 ">
                <Checkbox key={task.tmpUid} label={task.title} tmpUid={task.tmpUid} setChecked={setCompletedTask} checked={task.completed} />
                <ButtonDelete onClick={() => deleteTask(task.tmpUid)} />
              </div>
            ))
          : empty}
      </div>
    </>
  );
};
