import { createContext, FC, useState, ReactNode } from "react";
import { ITask, ITasksContext, TasksFilter } from "../types/task";
import { uid } from "uid";

export const TasksContext = createContext<ITasksContext | null>(null);

interface Props {
  children: ReactNode | ReactNode[];
}

export const TasksProvider: FC<Props> = ({ children }) => {
  const [tasksList, setTasksLists] = useState<ITask[]>([]);

  const [tasksFilter, setTasksFilter] = useState<TasksFilter>(TasksFilter.SHOW_ALL);

  const addNewTask = (title: string) => {
    const newTask: ITask = { tmpUid: uid(), title, completed: false };
    const listWithNewTask = [...tasksList, newTask];
    setTasksLists(listWithNewTask);
  };

  const deleteTask = (tmpUid: string) => {
    const listWithoutTask = tasksList.filter((task) => task.tmpUid !== tmpUid);
    setTasksLists(listWithoutTask);
  };

  const setCompletedTask = (tmpUid: string, completed: boolean) => {
    const updatedTasks = tasksList.map((task) => (task.tmpUid === tmpUid ? { ...task, completed } : task));
    setTasksLists(updatedTasks);
  };

  return (
    <TasksContext.Provider
      value={{
        tasksList,
        tasksFilter,
        setTasksFilter,
        addNewTask,
        setCompletedTask,
        deleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
