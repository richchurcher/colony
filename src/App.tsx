import React, { FunctionComponent } from "react";
import "./App.css";
import CreateHuman from "./components/CreateHuman";
import CreateResource from "./components/CreateResource";
import CreateTask from "./components/CreateTask";
import GameArea from "./components/GameArea";
import Tasks from "./components/Tasks";
import { RootStoreProvider } from "./contexts";

const App: FunctionComponent = () => {
  return (
    <RootStoreProvider>
      <GameArea />
      <CreateHuman />
      <Tasks />
      <CreateTask />
      <CreateResource />
    </RootStoreProvider>
  );
};

export default App;
