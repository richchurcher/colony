import { Instance, types } from "mobx-state-tree";
import { Task, TaskType, HumanType } from "../models";

// TODO: db id sync
let lastTaskId = 0;

export const TaskStore = types
  .model({
    tasks: types.array(Task),
  })
  .views((self) => ({
    get count(): number {
      return self.tasks.length;
    },
    assignedTo(human: HumanType) {
      return self.tasks.filter((t) =>
        t.assigned.find((h) => h.id === human.id)
      );
    },
  }))
  .actions((self) => ({
    add(name: string) {
      lastTaskId++;
      self.tasks.push({
        name,
        id: `${lastTaskId}`,
      });
    },

    assign(task: TaskType, human: HumanType) {
      if (!task.assigned.find((h) => h.id === human.id)) {
        task.assigned.push(human);
      }
    },

    unAssign(task: TaskType, human: HumanType) {
      task.assigned.remove(human);
    },
  }));

export interface TaskStoreType extends Instance<typeof TaskStore> {}
