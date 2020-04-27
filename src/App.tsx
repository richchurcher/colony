import React, { FunctionComponent } from "react";
import "./App.css";
import CreateHuman from "./components/CreateHuman";
import Humans from "./components/Humans";
import { HumanStoreProvider } from "./contexts";

const App: FunctionComponent = () => {
  return (
    <HumanStoreProvider>
      <Humans />
      <CreateHuman />
    </HumanStoreProvider>
  );
};

export default App;
