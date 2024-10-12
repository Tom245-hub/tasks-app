import { FC } from "react";

import { TasksList } from "./components/Templates/TasksList";
import { TaskInput } from "./components/Templates/TaskInput";
import { TasksFilters } from "./components/Templates/TasksFilters";

import { TasksProvider } from "./context/TasksProvider";
import { Container } from "./components/UI/Container";

export const App: FC = () => {
  return (
    <>
      <TasksProvider>
        <Container>
          <TaskInput />
          <TasksFilters />
          <TasksList />
        </Container>
      </TasksProvider>
    </>
  );
};
