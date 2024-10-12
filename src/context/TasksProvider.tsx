import { createContext, FC, useState, ReactNode } from "react";
import { ITask, ITasksContext } from "../types/task";
import { uid } from "uid";

export const TasksContext = createContext<ITasksContext | null>(null);

interface Props {
  children: ReactNode | ReactNode[];
}

export const TasksProvider: FC<Props> = ({ children }) => {
  const [tasksList, setTasksLists] = useState<ITask[]>([]);

  const addNewTask = (title: string) => {
    const newTask = { tmpUid: uid(), title };

    const listWithNewTask = [...tasksList, newTask];

    setTasksLists(listWithNewTask);
  };

  return (
    <TasksContext.Provider
      value={{
        tasksList,
        addNewTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
