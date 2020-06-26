import { observer } from "mobx-react-lite";
import React, { FunctionComponent } from "react";
import { useRootStore } from "../hooks";
import { TaskType } from "../models";
import Human from "./Human";

interface HumanTaskListProps {
  assignedTasks: TaskType[];
}

const HumanTaskList: FunctionComponent<HumanTaskListProps> = ({
  assignedTasks,
}) =>
  assignedTasks.length ? (
    <ul>
      {assignedTasks.map((t: TaskType) => (
        <li key={t.id}>{t.name}</li>
      ))}
    </ul>
  ) : null;

const Humans: FunctionComponent = () => {
  const store = useRootStore();

  const humanMapper = (humanKeys: IterableIterator<string>) => {
    return Array.from(humanKeys).map((key) => {
      const human = store.humanStore.humans.get(key);
      if (human) {
        const assignedTasks = store.taskStore.assignedTo(human);
        const selected = !!store.uiStore.selection.find(
          (s) => s.id === human.id
        );
        return (
          <div key={key}>
            <Human id={key} selected={selected} />
            <HumanTaskList assignedTasks={assignedTasks} />
          </div>
        );
      }
      return null;
    });
  };

  const { humanStore, taskStore } = store;
  if (
    taskStore &&
    taskStore.tasks.length &&
    humanStore &&
    humanStore.count > 0
  ) {
    const human = humanStore.humans.get(
      Array.from(humanStore.humans.keys())[0]
    );
    if (human) {
      taskStore.assign(taskStore.tasks[0], human);
    }
  }

  return <div>{humanMapper(humanStore.humans.keys())}</div>;
};

export default observer(Humans);
