import React, { FunctionComponent, useState } from "react";
import { HumanStore } from "../models/HumanStore";
import { HumanStoreContext } from "./HumanStoreContext";

export const HumanStoreProvider: FunctionComponent = ({ children }) => {
  const [humanStore] = useState(() => HumanStore.create({ humans: {} }));

  return (
    <HumanStoreContext.Provider value={humanStore}>
      {children}
    </HumanStoreContext.Provider>
  );
};
