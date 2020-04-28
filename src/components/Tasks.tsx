import { observer } from "mobx-react-lite";
import React, { FunctionComponent } from "react";
import { useRootStore } from "../hooks";
import { TaskType } from "../models";

const Tasks: FunctionComponent = () => {
  const { taskStore } = useRootStore();

  return (
    <div>
      {taskStore.tasks.map((t: TaskType) => (
        <li key={t.id}>{t.name}</li>
      ))}
    </div>
  );
};

export default observer(Tasks);
