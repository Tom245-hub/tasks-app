import { FC, useContext } from "react";
import { TasksContext } from "../../context/TasksProvider";
import { ITasksContext, TasksFilter } from "../../types/task";
import { Button } from "../FormElements/Button";

export const TasksFilters: FC = () => {
  const { tasksFilter, setTasksFilter } = useContext(TasksContext) as ITasksContext;

  const activeShowAll = tasksFilter === TasksFilter.SHOW_ALL;
  const activeHideComplated = tasksFilter === TasksFilter.HIDE_COMPLATED;

  const setShowAll = () => setTasksFilter(TasksFilter.SHOW_ALL);
  const setHideComplated = () => setTasksFilter(TasksFilter.HIDE_COMPLATED);

  return (
    <>
      <div className="flex justify-between gap-4">
        <Button title="Show all" active={activeShowAll} onClick={setShowAll} />
        <Button title="Hide complated" active={activeHideComplated} onClick={setHideComplated} />
      </div>
    </>
  );
};
