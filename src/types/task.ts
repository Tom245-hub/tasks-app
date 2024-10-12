export interface ITask {
  tmpUid: string;
  title: string;
}

export interface ITasksContext {
  tasksList: ITask[];
  addNewTask: (title: string) => void;
}
