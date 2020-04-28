import React, { ChangeEvent, FunctionComponent, useState } from "react";
import { useRootStore } from "../hooks";

const CreateTask: FunctionComponent = () => {
  const { taskStore } = useRootStore();
  const [name, setName] = useState<string>("");

  const createTask = () => {
    if (name) {
      taskStore.add(name);
    }
  };

  const onNameUpdate = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.currentTarget.value);

  return (
    <>
      <input
        type="text"
        placeholder="Task name"
        onChange={onNameUpdate}
        value={name}
      />
      <button onClick={createTask}>CREATE</button>
    </>
  );
};

export default CreateTask;
