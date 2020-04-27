import { types, Instance } from "mobx-state-tree";

// TODO: db id sync
let lastHumanId = 0;

const HumanModel = types.model({
  id: types.identifier,
  name: types.string,
});

export const HumanStore = types
  .model({
    humans: types.map(HumanModel),
  })
  .views((self) => ({
    get count(): number {
      return self.humans.size;
    },
  }))
  .actions((self) => ({
    add(name: string) {
      lastHumanId++;
      self.humans.put({ name, id: `${lastHumanId}` });
    },
  }));

export interface HumanType extends Instance<typeof HumanStore> {}
