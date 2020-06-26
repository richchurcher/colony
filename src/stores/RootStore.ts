import { Instance, types } from "mobx-state-tree";
import { HumanStore } from "./HumanStore";
import { ResourceStore } from "./ResourceStore";
import { TaskStore } from "./TaskStore";
import { UIStore } from "./UIStore";

export const RootStore = types.model("RootStore", {
  humanStore: types.optional(HumanStore, { humans: {} }),
  resourceStore: types.optional(ResourceStore, { resources: [] }),
  taskStore: types.optional(TaskStore, { tasks: [] }),
  uiStore: types.optional(UIStore, { selection: [] }),
});

export interface RootStoreType extends Instance<typeof RootStore> {}
