import { Instance, types } from "mobx-state-tree";

export const Equipment = types.model("Equipment", {
  id: types.identifier,
  name: types.string,
});

export interface EquipmentType extends Instance<typeof Equipment> {}

export const Location = types.model("Location", {
  id: types.identifier,
  name: types.string,
  location: types.frozen({ x: 0, y: 0 }),
});

export interface LocationType extends Instance<typeof Location> {}

export const Human = types.model("Human", {
  id: types.identifier,
  destination: types.maybe(Location),
  name: types.string,
  equipment: types.array(Equipment),
  equipped: types.maybe(types.reference(Equipment)),
});

export interface HumanType extends Instance<typeof Human> {}

export const Resource = types.model("Resource", {
  id: types.identifier,
  name: types.string,
  location: types.maybe(Location),
});

export interface ResourceType extends Instance<typeof Resource> {}

export const Task = types.model("Task", {
  id: types.identifier,
  name: types.string,
  assigned: types.array(types.reference(Human)),
  location: types.maybe(Location),
});

export interface TaskType extends Instance<typeof Task> {}
