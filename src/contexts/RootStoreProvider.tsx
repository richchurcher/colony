import React, { FunctionComponent, useState } from "react";
import { RootStore } from "../stores/RootStore";
import { RootStoreContext } from "./RootStoreContext";

export const RootStoreProvider: FunctionComponent = ({ children }) => {
  const [rootStore] = useState(() => RootStore.create());

  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  );
};
