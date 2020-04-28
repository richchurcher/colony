import { Instance, types } from "mobx-state-tree";
import { Human } from "../models";

// TODO: db id sync
let lastHumanId = 0;

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
      lastHumanId++;
      self.humans.put({
        name,
        id: `${lastHumanId}`,
      });
    },
  }));

export interface HumanStoreType extends Instance<typeof HumanStore> {}
