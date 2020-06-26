import { Instance, types } from "mobx-state-tree";
import {
  Equipment,
  EquipmentType,
  Human,
  HumanType,
  ResourceType,
  Resource,
} from "../models";

type Selection = HumanType | EquipmentType | ResourceType;

export const UIStore = types
  .model({
    selection: types.array(
      types.reference(types.union(Human, Equipment, Resource))
    ),
  })
  .views((self) => ({}))
  .actions((self) => ({
    select(target: Selection) {
      if (!self.selection.find((s: Selection) => s.id === target.id)) {
        self.selection.push(target);
      }
    },
    deselect(target: Selection) {
      self.selection.remove(target);
    },
  }));

export interface UIStoreType extends Instance<typeof UIStore> {}
