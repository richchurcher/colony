import { useContext } from "react";
import { RootStoreContext } from "../contexts";
import { RootStoreType } from "../stores";

export const useRootStore = (): RootStoreType => {
  const store = useContext(RootStoreContext);
  if (!store) {
    throw Error("<RootStoreProvider isn't providing RootStoreContext.");
  }

  return store;
};
