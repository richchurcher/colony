import { Instance, types } from "mobx-state-tree";
import { Human } from "../models";
import { v4 as uuidv4 } from "uuid";

export const HumanStore = types
  .model({
    humans: types.map(Human),
  })
  .views((self) => ({
    get count(): number {
      return self.humans.size;
    },
  }))
  .actions((self) => ({
    add(name: string) {
      self.humans.put({
        name,
        id: uuidv4(),
      });
    },
  }));

export interface HumanStoreType extends Instance<typeof HumanStore> {}
