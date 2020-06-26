import { Instance, types } from "mobx-state-tree";
import { Resource } from "../models";
import { v4 as uuidv4 } from "uuid";

export const ResourceStore = types
  .model({
    resources: types.array(Resource),
  })
  .views((self) => ({}))
  .actions((self) => ({
    add(name: string) {
      self.resources.push({
        name,
        id: uuidv4(),
      });
    },
  }));

export interface ResourceStoreType extends Instance<typeof ResourceStore> {}
