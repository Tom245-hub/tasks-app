export enum TasksFilter {
  SHOW_ALL = "show_all",
  HIDE_COMPLATED = "hide_complated",
}

export interface ITask {
  tmpUid: string;
  title: string;
  completed: boolean;
}

export interface ITasksContext {
  tasksList: ITask[];
  tasksFilter: TasksFilter;
  setTasksFilter: (data: TasksFilter) => void;
  addNewTask: (title: string) => void;
  setCompletedTask: (tmpUid: string, completed: boolean) => void;
  deleteTask: (tmpUid: string) => void;
}
