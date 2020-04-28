import { Instance, types } from "mobx-state-tree";
import { HumanStore } from "./HumanStore";
import { TaskStore } from "./TaskStore";

export const RootStore = types.model("RootStore", {
  humanStore: types.optional(HumanStore, { humans: {} }),
  taskStore: types.optional(TaskStore, { tasks: [] }),
});

export interface RootStoreType extends Instance<typeof RootStore> {}
