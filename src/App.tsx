import React, { FunctionComponent } from "react";
import "./App.css";
import CreateHuman from "./components/CreateHuman";
import CreateTask from "./components/CreateTask";
import Humans from "./components/Humans";
import Tasks from "./components/Tasks";
import { RootStoreProvider } from "./contexts";

const App: FunctionComponent = () => {
  return (
    <RootStoreProvider>
      <Humans />
      <CreateHuman />
      <Tasks />
      <CreateTask />
    </RootStoreProvider>
  );
};

export default App;
