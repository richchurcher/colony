import { useContext } from "react";

import { HumanStoreContext } from "../contexts";
import { HumanType } from "../models";

export const useHumanStore = (): HumanType => {
  const store = useContext(HumanStoreContext);
  if (!store) {
    throw Error("<HumanStoreProvider isn't providing HumanStoreContext.");
  }

  return store;
};
